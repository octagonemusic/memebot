const Discord = require('discord.js')
const economy = require('../../economy')
const items = require('../../shopitems')
const inventory = require('../../schemas/inv-schema')


module.exports = {
  commands: ['deposit', 'dep'],
  callback: async (message, arguments, text) => {
    const { guild, member } = message
    const coinsOwned = await economy.getCoins(guild.id, member.id)
    const bankOwned = await economy.getBank(guild.id, member.id)


    const itemToBuy = 'banknote'


    const validItem = !!items.find(
        (val) => val.item.toLowerCase() === itemToBuy
    )


    const coinsToGive = arguments[0]

    const params = {
      guildId: guild.id,
      userId: member.id
  }

  const guildId = guild.id
  const userId = member.id
  inventory.findOne(params, async (err, data) => {

      if (data) {
          const hasItem = Object.keys(data.Inventory).includes(itemToBuy)
          if (!hasItem) {
            if (arguments[0] === 'max') {

              if (coinsOwned >= 30001) {
                  message.reply(`**You cannot deposit more than \`30000\` Credits in the Bank!**`)
              } else {
              const xD = await economy.addBank(guild.id, member.id, coinsOwned)
              const mf = await economy.addCoins(
                  guild.id,
                  member.id,
                  coinsOwned * -1
                )
      
                message.reply(
                  new Discord.MessageEmbed()
                  .setTitle('Deposited!')
                  .setColor('RANDOM')
                  .setFooter(`Deposited by ${message.author.username}`, message.author.displayAvatarURL())
                  .setDescription(`**Deposited Amount:** \`${coinsOwned}\`
      
      **Wallet Amount:** \`${mf}\`
      
      **Bank Amount:** \`${xD}\``)
                )
              }
              return 
          } 
          if (isNaN(coinsToGive)) {
            message.reply('Please provide a valid number of Credits to deposit in the bank.')
            return
          }
      
         
          if (coinsOwned < coinsToGive) {
            message.reply(`You do not have ${coinsToGive} Credits in your wallet to deposit in the bank!`)
            return
          } 
      
          if (coinsToGive >= 30001) {
              message.reply(`You cannot deposit more than 30000 Credits in the Bank!`)
            return
          }
      
          if (bankOwned >= 30000) {
             message.reply(`You cannot deposit more than 30000 Credits in the Bank!`)
             return
          }
      
          const remainingCoins = await economy.addCoins(
            guild.id,
            member.id,
            coinsToGive * -1
          )
          const newBalance = await economy.addBank(guild.id, member.id, coinsToGive)
      
          message.channel.send(
            new Discord.MessageEmbed()
            .setTitle('Deposited!')
            .setColor('RANDOM')
            .setFooter(`Deposited by ${message.author.username}`, message.author.displayAvatarURL())
            .setDescription(`**Deposited Amount:** \`${coinsToGive}\`
      
      **Wallet Amount:** \`${remainingCoins}\`
      
      **Bank Amount:** \`${newBalance}\``)
          )
      
          } else {
            if (arguments[0] === 'max') {

              if (coinsOwned >= 60001) {
                  message.reply(`**You cannot deposit more than \`60000\` Credits in the Bank!**`)
              } else {
              const xD = await economy.addBank(guild.id, member.id, coinsOwned)
              const mf = await economy.addCoins(
                  guild.id,
                  member.id,
                  coinsOwned * -1
                )
      
                message.reply(
                  new Discord.MessageEmbed()
                  .setTitle('Deposited!')
                  .setColor('RANDOM')
                  .setFooter(`Deposited by ${message.author.username}`, message.author.displayAvatarURL())
                  .setDescription(`**Deposited Amount:** \`${coinsOwned}\`
      
      **Wallet Amount:** \`${mf}\`
      
      **Bank Amount:** \`${xD}\``)
                )
              }
              return 
          } 
          if (isNaN(coinsToGive)) {
            message.reply('Please provide a valid number of Credits to deposit in the bank.')
            return
          }
      
         
          if (coinsOwned < coinsToGive) {
            message.reply(`You do not have ${coinsToGive} Credits in your wallet to deposit in the bank!`)
            return
          } 
      
          if (coinsToGive >= 60001) {
              message.reply(`You cannot deposit more than 60000 Credits in the Bank!`)
            return
          }
      
          if (bankOwned >= 60000) {
             message.reply(`You cannot deposit more than 60000 Credits in the Bank!`)
             return
          }
      
          const remainingCoins = await economy.addCoins(
            guild.id,
            member.id,
            coinsToGive * -1
          )
          const newBalance = await economy.addBank(guild.id, member.id, coinsToGive)
      
          message.channel.send(
            new Discord.MessageEmbed()
            .setTitle('Deposited!')
            .setColor('RANDOM')
            .setFooter(`Deposited by ${message.author.username}`, message.author.displayAvatarURL())
            .setDescription(`**Deposited Amount:** \`${coinsToGive}\`
      
      **Wallet Amount:** \`${remainingCoins}\`
      
      **Bank Amount:** \`${newBalance}\``)
          )
      
          }
      } else {
        if (arguments[0] === 'max') {

          if (coinsOwned >= 30001) {
              message.reply(`**You cannot deposit more than \`30000\` Credits in the Bank!**`)
          } else {
          const xD = await economy.addBank(guild.id, member.id, coinsOwned)
          const mf = await economy.addCoins(
              guild.id,
              member.id,
              coinsOwned * -1
            )
  
            message.reply(
              new Discord.MessageEmbed()
              .setTitle('Deposited!')
              .setColor('RANDOM')
              .setFooter(`Deposited by ${message.author.username}`, message.author.displayAvatarURL())
              .setDescription(`**Deposited Amount:** \`${coinsOwned}\`
  
  **Wallet Amount:** \`${mf}\`
  
  **Bank Amount:** \`${xD}\``)
            )
          }
          return 
      } 
      if (isNaN(coinsToGive)) {
        message.reply('Please provide a valid number of Credits to deposit in the bank.')
        return
      }
  
     
      if (coinsOwned < coinsToGive) {
        message.reply(`You do not have ${coinsToGive} Credits in your wallet to deposit in the bank!`)
        return
      } 
  
      if (coinsToGive >= 30001) {
          message.reply(`You cannot deposit more than 30000 Credits in the Bank!`)
        return
      }
  
      if (bankOwned >= 30000) {
         message.reply(`You cannot deposit more than 30000 Credits in the Bank!`)
         return
      }
  
      const remainingCoins = await economy.addCoins(
        guild.id,
        member.id,
        coinsToGive * -1
      )
      const newBalance = await economy.addBank(guild.id, member.id, coinsToGive)
  
      message.channel.send(
        new Discord.MessageEmbed()
        .setTitle('Deposited!')
        .setColor('RANDOM')
        .setFooter(`Deposited by ${message.author.username}`, message.author.displayAvatarURL())
        .setDescription(`**Deposited Amount:** \`${coinsToGive}\`
  
  **Wallet Amount:** \`${remainingCoins}\`
  
  **Bank Amount:** \`${newBalance}\``)
      )
  
      }

  })
    
  },
}