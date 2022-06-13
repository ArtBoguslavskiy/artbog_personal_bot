import { bot } from "./bot-config.js";
import { start } from "./commands/start.js";
import { info } from "./commands/info.js";
import { addTask, work } from "./commands/work/index.js";

const regex = /[A-Z]{2,}-\d+/gim;

const run = () => {
  bot.setMyCommands([
    { command: "/start", description: "Start bot" },
    { command: "/info", description: "Get my info" },
  ]);

  bot.on("message", async (msg) => {
    const { chat, text } = msg;
    const task = regex.exec(text);

    if (text === "/start" || text === "Start" || text === "🏠 Home") {
      return start(msg);
    }

    if (text === "/info" || text === "Say hello to me 👋") {
      return info(msg);
    }

    if (text === "Work 💻") {
      return work(msg);
    }

    if (task) {
      return work(msg, task[0]);
    }

    return bot.sendMessage(
      chat.id,
      `I really want to help, but I don't know your command 🥺`
    );
  });

  bot.on("callback_query", async (msg) => {
    console.log("Callback", msg);
    const { data, message } = msg;

    if (data === "info") {
      return info(message);
    }

    if (data === "home") {
      return start(message);
    }

    if (data === "addTask") {
      const task = regex.exec(message.text);
      return addTask(message, task[0].toUpperCase());
    }
  });
};

run();
