const TelegramAPI = require('node-telegram-bot-api')
const Airtable = require('airtable');
const { configure, Table, base } = require('airtable');
require('dotenv').config()

const TGtoken = process.env.TG_TOKEN

//const Audio = 'https://v5.airtableusercontent.com/v1/14/14/1673712000000/3h1huWwwI6X2BnJjmE69bg/JhYTwL9wy3Zwpr9c0I7Wk3AQ8UQTFs_jqNHima-IhlXLrjr3nhwMD5GHFm0YWWM3GKHd7VC75jeNWrAUtWzTpk1areAI--3aUX7YTZjCIFL2tIhchCr9_m9di1Ai2s22q8rqLBk1X5W5E2UTe3j-SItlROV-jQPcCcMVeTvvAss/nnHb3uiFe-dc2j9RYMM8uRTOu60MGIMCMwCUIenC2C4'
const arrayAudio = [
    'https://v5.airtableusercontent.com/v1/14/14/1673712000000/3h1huWwwI6X2BnJjmE69bg/JhYTwL9wy3Zwpr9c0I7Wk3AQ8UQTFs_jqNHima-IhlXLrjr3nhwMD5GHFm0YWWM3GKHd7VC75jeNWrAUtWzTpk1areAI--3aUX7YTZjCIFL2tIhchCr9_m9di1Ai2s22q8rqLBk1X5W5E2UTe3j-SItlROV-jQPcCcMVeTvvAss/nnHb3uiFe-dc2j9RYMM8uRTOu60MGIMCMwCUIenC2C4',
    'https://v5.airtableusercontent.com/v1/14/14/1673712000000/1I3Qp0X7SV6azh65R-viEw/Ibe9PPdsOKBxnrOSAnzf3dnyt9AVLxyciEeH_0IQth6-3KcbTxtvDSdj8DBwl5EvjpKpBD_dl2hCreF1deTFsyh9RBQ_9N51Czi6lr0IJE_sSmanHWzXl0l0fJ1MV4hS92fuP0FsoGN0cHm3QDsQ2JT6Kv-7s8HO15Rji9l97h0/ivUtogPHsrvVjsU1IPJbuC-pDPUSQq7gm-GVOA4rg3M',
    'https://v5.airtableusercontent.com/v1/14/14/1673712000000/cS4xzn9Tnr90HYIZHe5Idg/D_GssqGZ6yILTXBvew6bxQxlWvWWW6hF5ZW6-f8v5gsPUtMgeMNaE3fI46RjGeQW_-GXulLXNB86Xj80FgAXRTgmVZkvZmU9BHiMZutr3xKcRqKTQkFzwQr0OLYpLIY20zqgtv79dWzqyV5lBu5lF03Q_X6GQczekRg2XX-qnAk/qIF93CXN3eMDnrKfuQ12vr4-KQLiv3gkPZhutZ5s9RY'
]

const AirtableToken = process.env.AIRTABLE_API_KEY
const BaseID = process.env.BASE_ID

const bot = new TelegramAPI(TGtoken, { polling: true })



bot.on('message', msg => {
    const text = msg.text;
    const chatID = msg.chat.id;
    //console.log(msg)
    switch (text) {
        case '/start':
            bot.sendMessage(chatID, `Устали на работе? Не беда! Я помогу вам почувствовать себя лучше! Для получения всех команд просто напишите /help`);
            break;
        case '/close':
            bot.sendMessage(chatID, 'Приходите ещё!')
            bot.close()
            break;
        case '/jopa':
            bot.sendVoice(chatID, arrayAudio[Math.floor(Math.random() * 3)])
            break;
        case '/help':
            bot.sendMessage(chatID, "/start - Запускает бота \n/jopa - Запускает жополизание\n/help - Выводит список доступных команд")
            break;
        default:
            bot.sendMessage(chatID, "Неправильная команда, напишите /help, чтобы узнать доступные команды")
    }


})
