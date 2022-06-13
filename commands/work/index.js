import { bot } from "../../bot-config.js";

const workKeyboard = {
  reply_markup: {
    keyboard: [["My tasks ✅", "Start time ⏱", "Stop time 🛑"], ["🏠 Home"]],
    resize_keyboard: true,
    one_time_keyboard: true,
    force_reply: true,
  },
};

const workInlineKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Yes",
          callback_data: "addTask",
        },
        {
          text: "No",
          callback_data: "home",
        },
      ],
    ],
  },
};

const tasks = [];

export const work = async ({ chat, text }, task = "") => {
  await bot.sendMessage(chat.id, `You now in work enviroment 💼`, workKeyboard);
  if (task) {
    await bot.sendMessage(
      chat.id,
      `Your try to add task number ${text.toUpperCase()}. Do you want to continue?`,
      workInlineKeyboard
    );
  }
};

export const addTask = ({ chat, date }, task_number) => {
  tasks.push({
    first_name: chat.first_name,
    username: chat.username,
    date,
    task_number,
  });
  bot.sendMessage(
    chat.id,
    `Task ${task_number} addet successfully. Start the timer?`
  );
};
