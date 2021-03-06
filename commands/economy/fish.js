const Discord = require('discord.js')
const inventory = require('../../schemas/inv-schema')
const items = require('../../shopitems')
const economy = require('../../economy')

module.exports = {
    commands: ['fish'],
    cooldown: 3,
    callback: async (message, args, client) => {

        const { guild, member } = message

        const itemToBuy = 'fishing pole'


        const validItem = !!items.find(
            (val) => val.item.toLowerCase() === itemToBuy
        )




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
                   message.reply(`**You need a Fishing Pole to fish!**`)
                } else {
                    const OctaCreds = Math.floor(Math.random() * 1000) + 1 || 0;

                    const newCoins = await economy.addCoins(guildId, userId, OctaCreds)
                    if (OctaCreds === 0) {
                        message.channel.send(`**You didn't catch any fish, what a loser lol**`)
                    } else { 
                    message.channel.send(`**You went fishing and got ${OctaCreds} Credits from selling fish!**`)
                }
            }
            
            } else {
                message.reply(`**You need a Fishing Pole to fish!**`)
            }

        })
    }
}