import { bot } from "../../bot-config.js";

export const timer = ({ chat }) => {
  if (tasks.length) {
    bot.sendMessage(chat.id, ``);
  } else {
    bot.sendMessage(
      chat.id,
      `You don't have any started tasks. Please write the number task which you want to create.`
    );
  }
};
