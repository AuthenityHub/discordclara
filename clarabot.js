const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./asset/config.json");

bot.on("ready", () => {
  console.log("I am ready!");

  bot.user.setStatus("online");
  bot.user.setGame(`${config.prefix}help`)
});

bot.on("game", () => {
  game.streaming(true);
  game.name = "bleu";
});

var commands = {
    "help": {
        "func": function (message, args) {
          message.channel.sendMessage([
            `${config.prefix}help`
          ]);
        }
    }
};

bot.on("message", function (message) {
  if (message.author.bot) return;
  //if (!message.content.startsWith(config.prefix)) return;

  //let command = message.content.split(" ")[0];
  //command = command.slice(config.prefix.length);

  //let args = message.content.split(" ").slice(1);

  if(message.content.indexOf("-") === 0) {
          var words = message.content.slice(1).split(" ");
          var cmd = commands[words.shift()];
          if(cmd !== undefined) {
              cmd.func(message, words);
          } else {
              message.channel.sendMessage("Unknown command! Type `,help` for help.");
          }
      }

});

bot.login(config.token);
