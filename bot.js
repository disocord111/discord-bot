const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDc2MTQ4NzQ1NjI1NDAzNDE2.DkpXuw.PnIl-8qPCTwdUvtbM4kHpzSu_dk
);
