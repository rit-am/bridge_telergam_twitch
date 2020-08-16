//Add libraries 
const tmi = require('tmi.js'); //Twitch API Library
const { Telegraf } = require('telegraf'); //Telegram API Library
const TelegramBot = require('node-telegram-bot-api'); //Telegram API Library

//setup Telegram Token Data 
const BOT_TOKEN = '13705svigWU'; //Replace token value with valid data

//Enable bot on Telegram to read user input
const bot = new TelegramBot(BOT_TOKEN, {polling: true});  


// Define Twitch configuration options
const opts = {
  identity: {
    username: 'soliloquies',  
    password: 'oau2wy26hl' //Replace token value with valid data from https://twitchapps.com/tmi/
  },
  channels: [
    //'channel1',
    //'chanel2',
    'soliloquies'
  ]
};

// Create a Twitch client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

//Get Data from Twitch and Post to Telegram
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot
    // Remove whitespace from chat message
    const commandName = msg.trim();
    const username = context.username;
    bot.sendMessage('-421119111', ">> "+ target + " : "+ context.username + " : " + commandName); //Replace 421119111 with Telegram Channel/Group ID
}

//Get Data from Telegram and Post to Twitch
bot.on('message',(msg) => {
    const chatID = msg.chat.    id;
    const chatId = msg.chat.id;
    const text = msg.text;

    client.say('#soliloquies', ">> Telegram >> "+msg.from.first_name + ", "+text); //Replace '#soliloquies' with Twitch Channel ID
    })

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}
console.log('bot start ')
