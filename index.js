const Discord = require("discord.js");
const { measureMemory } = require("vm");

const Client = new Discord.Client;

const prefix = "=";

Client.on("ready", () => {
    console.log("bot operational");
});

Client.on("message", message => {
    if(message.author.bot) return;

    //=ha
    if(message.content == prefix + "ha"){
        message.channel.send("ma")
    }
});

Client.login("Your Token Bot");


