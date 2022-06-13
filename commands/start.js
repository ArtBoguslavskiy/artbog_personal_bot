import { bot } from "../bot-config.js";

const baseKeyboard = {
  reply_markup: {
    keyboard: [["Start", "Say hello to me 👋", "Work 💻"]],
    resize_keyboard: true,
    one_time_keyboard: true,
    force_reply: true,
  },
};

export const start = ({ chat }) => {
  bot.sendMessage(chat.id, `Hi bro. I'm your personal bot`);
  setTimeout(() => {
    bot.sendMessage(
      chat.id,
      `You created me for automatizing your daily routine`,
      baseKeyboard
    );
  }, 500);
};
