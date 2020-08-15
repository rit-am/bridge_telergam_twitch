const BOT_TOKEN = '13705svigWU';
const { Telegraf } = require('telegraf');
//const bot = new Telegraf(BOT_TOKEN);
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(BOT_TOKEN, {polling: true});
const tmi = require('tmi.js');
// Define configuration options
const opts = {
  identity: {
    username: 'soliloquies',
    password: 'oau2wy26hl'
  },
  channels: [
    //'channel1',
    //'chanel2',
    'soliloquies'
  ]
};
// Create a client with our options
const client = new tmi.client(opts);
// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
// Connect to Twitch:
client.connect();
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot
    // Remove whitespace from chat message
    const commandName = msg.trim();
    const username = context.username;
    bot.sendMessage('-421119111', ">> "+ target + " : "+ context.username + " : " + commandName);
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}
bot.on('message',(msg) => {
    const chatID = msg.chat.    id;
    const chatId = msg.chat.id;
    const text = msg.text;

    client.say('#soliloquies', ">> Telegram >> "+msg.from.first_name + ", "+text);
    })

console.log('telegram bot start ')
