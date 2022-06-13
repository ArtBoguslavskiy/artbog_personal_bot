import TelegramBotApi from "node-telegram-bot-api";

const token = "5413339027:AAEhUUS0fcXqlKr3kSm7b4cqPUo--JMX4Eo";

export const bot = new TelegramBotApi(token, { polling: true });
