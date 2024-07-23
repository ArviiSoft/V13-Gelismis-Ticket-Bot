const fs = require('fs');//arviis.
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId } = require('./config.json');//arviis.
const t = require('./config.json');
//arviis.
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//arviis.

// arviis.
rest.put(Routes.applicationCommands(clientId), {// arviis.
    body: commands
  })//  arviis.
//  arviis.
  .then(() => console.log('[KOMUTLAR] Aktif'))//  arviis.
  .catch(console.error);//  arviis.
  //  arviis.
  //  arviis.










  //  arviis.