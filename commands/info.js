import { bot } from "../bot-config.js";

const infoInlineKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Yes",
          callback_data: "info",
        },
        {
          text: "No",
          callback_data: "home",
        },
      ],
    ],
  },
};

export const info = ({ chat }) => {
  bot.sendMessage(chat.id, `Your name is ${chat.first_name}`);
  setTimeout(() => {
    bot.sendMessage(chat.id, `Do you want something? 😌`, infoInlineKeyboard);
  }, 500);
};
