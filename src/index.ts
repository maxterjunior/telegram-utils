import dotenv from 'dotenv'; dotenv.config()
import { Telegraf } from 'telegraf'
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';

//* Configuraciones *//
const PROD = process.env.PROD || 'false'
const BOT_VERSION = process.env.BOT_VERSION || '-'
const BOT_TOKEN = (PROD.toLowerCase() == 'true') ? (process.env.BOT_TOKEN || '') : (process.env.BOT_TOKEN_QAS || '');
const Markdown: ExtraReplyMessage = { parse_mode: 'Markdown' }

/* Telegram */
const bot = new Telegraf(BOT_TOKEN)

/* Comandos */
bot.start((ctx: any) => {
    // console.log(ctx.chat)
    ctx.reply(`Bienvenido ${ctx.chat.first_name}\nChatID es : ${ctx.chat.id}\nUsername : ${ctx.chat.username}`, Markdown)
})

bot.help((ctx) => {
    const help =
        `
*¿En qué puedo ayudarte?* 🤖 ${BOT_VERSION}v
/start - Inicia el bot
`
    ctx.reply(help, Markdown)
})

/* Lanzamiento */
try {
    bot.launch()
    console.log('Bot iniciado')
}
catch {
    console.log('Bot no iniciado')
}
