const Discord = require('discord.js')
const inventory = require('../../schemas/inv-schema')

module.exports = {
    commands: ['inventory', 'inv'],
    callback: async (message, args, client) => {

        const { guild, member } = message
        inventory.findOne(
            { guildId: guild.id, userId: member.id },
            async (err, data) => {
                if (!data) return message.channel.send(`**Your inventory is empty!**`)
                const mappedData = Object.keys(data.Inventory)
                    .map((key) => {
                        return `**${data.Inventory[key]} ${key}(s)**`;
                    })

                
                    message.channel.send(
                        new Discord.MessageEmbed()
                        .setTitle(`${message.author.username}'s Inventory!`)
                        .setDescription(mappedData.join("\n\n"))
                        .setColor("RANDOM")
                    )
            }
        )
    },
}