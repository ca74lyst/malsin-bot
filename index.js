// import TOKEN from the .env file using dotenv
require('dotenv').config()

const TOKEN = process.env.TOKEN
const usernames = ['Tinky Winky', 'Noo-noo', 'Dipsy', 'Laa-laa']
// import discord.js
const { Client, Intents } = require('discord.js')

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// display the message when the bot is ready
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

// listen for messages
client.on('message', (msg) => {
	// if the message is from the bot, ignore it
	if (msg.author.bot) return
	if (usernames.includes(msg.author.username)) {
		msg.react('👎')
		msg.reply({
			files: [`./images/malsin${Math.floor(Math.random() * 4) + 1}.png`],
		})
	}
})
// login to discord
client.login(TOKEN)
