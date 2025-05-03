const { Client, intents, Collection, MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require("discord.js");
const client = new Client({ intents: 32767 })
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('Server Started');
});

const fs = require("fs")
const ms = require(`ms`)
const Discord = require("discord.js")
const { prefix, owners } = require(`${process.cwd()}/config`);
const config = require(`${process.cwd()}/config`);
const Data = require("pro.db")
const mongoose = require("mongoose")
const { createCanvas, registerFont } = require("canvas")
const canvas = require('canvas')
const {  MessageSelectMenu } = require('discord.js');
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require(`${process.cwd()}/config`);
require("./handler")(client);
client.prefix = prefix;
client.login(config.token);
mongoose.connect(config.db)
.then(() => { console.log("MongoDB Connected ✅"); })
.catch((err) => { console.error("Failed to connect to MongoDB", err); });
require("events").EventEmitter.defaultMaxListeners = 9999999;
client.on("ready", async () => {
  console.log(`Name : ${client.user.tag}
Ping : ${client.ws.ping}
Prefix : ${client.prefix}
ID : ${client.user.id}
Server : ${client.guilds.cache.size}
Members : ${client.users.cache.size}
Channels : ${client.channels.cache.size}`)
});



process.on("unhandledRejection", (reason, promise) => { return })
process.on("uncaughtException", (err, origin) => { return })
process.on('uncaughtExceptionMonitor', (err, origin) => { return });
process.on('multipleResolves', (type, promise, reason) => { return })

var { inviteTracker } = require("discord-inviter");
tracker = new inviteTracker(client);
registerFont("FiraSans-Regular.ttf", { family: "خط" });
const db = require("./models/welcome"); // Replace "db" with the actual name of your database model
const db1 = require("./models/welcome");
client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if (!message.member.permissions.has("ADMINISTRATOR")) return;
  let data = await db1.findOne({
    id: message.guild.id,
  });
  if (args[0] === prefix + "wsize") {
    if (
      !args[1] ||
      isNaN(Number(args[1])) ||
      Number(args[1]) > 4056 ||
      Number(args[1]) < 10
    )
      return message.reply({
        content: `**❌ - يرجى كتابة الحجم الصحيح.**`,
      });
    if (!data) {
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.wsize = Number(args[1]);
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "hsize") {
    if (
      !args[1] ||
      isNaN(Number(args[1])) ||
      Number(args[1]) > 4056 ||
      Number(args[1]) < 10
    )
      return message.reply({
        content: `**❌ - يرجى كتابة الحجم الصحيح.**`,
      });
    if (!data) {
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.hsize = Number(args[1]);
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "xavatar") {
    if (
      !args[1] ||
      isNaN(Number(args[1])) ||
      Number(args[1]) > 4056 ||
      Number(args[1]) < 10
    )
      return message.reply({
        content: `**❌ - يرجى كتابة الحجم الصحيح.**`,
      });
    if (!data) {
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.xavatar = Number(args[1]);
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "yavatar") {
    if (
      !args[1] ||
      isNaN(Number(args[1])) ||
      Number(args[1]) > 4056 ||
      Number(args[1]) < 10
    )
      return message.reply({
        content: `**❌ - يرجى كتابة الحجم الصحيح.**`,
      });
    if (!data) {
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.yavatar = Number(args[1]);
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "sxavatar") {
    if (
      !args[1] ||
      isNaN(Number(args[1])) ||
      Number(args[1]) > 4056 ||
      Number(args[1]) < 10
    )
      return message.reply({
        content: `**❌ - يرجى كتابة الحجم الصحيح.**`,
      });
    if (!data) {
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.sxavatar = Number(args[1]);
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "syavatar") {
    if (
      !args[1] ||
      isNaN(Number(args[1])) ||
      Number(args[1]) > 4056 ||
      Number(args[1]) < 10
    )
      return message.reply({
        content: `**❌ - يرجى كتابة الحجم الصحيح.**`,
      });
    if (!data) {
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.syavatar = Number(args[1]);
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "xname") {
    if (
      !args[1] ||
      isNaN(Number(args[1])) ||
      Number(args[1]) > 4056 ||
      Number(args[1]) < 10
    )
      return message.reply({
        content: `**❌ - يرجى كتابة الحجم الصحيح.**`,
      });
    if (!data) {
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.xname = Number(args[1]);
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "yname") {
    if (
      !args[1] ||
      isNaN(Number(args[1])) ||
      Number(args[1]) > 4056 ||
      Number(args[1]) < 10
    )
      return message.reply({
        content: `**❌ - يرجى كتابة الحجم الصحيح.**`,
      });
    if (!data) {شكلك
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.yname = Number(args[1]);
    await data.save();
    message.react(`✅`);

  } else if (args[0] === prefix + "sname") {
    if (
      !args[1] ||
      isNaN(Number(args[1])) ||
      Number(args[1]) > 2000 ||
      Number(args[1]) < 1
    )
      return message.reply({
        content: `**❌ - يرجى كتابة الحجم الصحيح.**`,
      });
    if (!data) {
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.sname = Number(args[1]);
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "ncolor") {
    if (!args[1])
      return message.reply({ content: `**❌ - يرجى كتابة اللون.**` });
    let code = await verifyColor(args[1]);
    if (!code)
      return message.react(`❌`);

    if (!data) {
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.ncolor = code;
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "message-wlc") {
    let msg = args.slice(1).join(" ");
    if (!msg)
      return message.reply({
        content: `**❌ - يرجى كتابة رسالة الترحيب**`,
      });
    if (msg.length > 4000)
      return message.react(`❌`);
    if (!data) {
      data = await db.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.message = msg;
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "channel-wlc") {
    let channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.find((c) => c.id === args[1]);
    if (!channel)
      return message.reply({
        content: `**يرجى ارفاق منشن الشات او الايدي .**`,
      });
    if (!data) {
      data = await db1.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.welchat = channel.id;
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "toggle-wlc") {
    if (!data) {
      data = await db1.create({
        id: message.guild.id,
      });
      await data.save();
    }
    if (!args[1])
      return message.reply({ content: `**off.**` });
    if (args[1] === "on") {
      data.welcome = true;
      await data.save();
      message.reply({ content: `**✅ تم تشغيل الترحيب .**` });
    } else if (args[1] === "off") {
      data.welcome = false;
      await data.save();
      message.reply({ content: `**✅ تم إيقاف الترحيب .**` });
    }
  } else if (args[0] === prefix + "data") {
    if (!data) {
      data = await db.get({
        id: message.guild.id,
      });
    }
    message.reply({ content: `${data}` });
  } else if (args[0] === prefix + "img-wlc") {
    let link = args[1];
    if (!link || !link.startsWith("https://"))
      return message.reply({ content: `**يرجي إرفاق رابط الصورة .**` });
    if (
      !link.includes(".png") &&
      !link.includes(".jpeg") &&
      !link.includes(".jpg") &&
      !link.includes(".webp")
    )
      return message.reply({ content: `****` });
    try {
      let gg = await canvas.loadImage(link);
    } catch (err) {
      return message.reply({ content: `` });
    }
    if (!data) {
      data = await db1.create({
        id: message.guild.id,
      });
      await data.save();
    }
    data.pic = link;
    await data.save();
    message.react(`✅`);
  } else if (args[0] === prefix + "t") {
    let member = await message.guild.members.fetch(message.author.id);
    if (!data || !data.welcome) return;
    if (data.welchat == "null") return;
    let channel = member.guild.channels.cache.find(
      (c) => c.id === data.welchat
    );
    if (!channel) return;
    let background;
    try {
      background = data.pic != "null" ? await canvas.loadImage(data.pic) : null;
    } catch (err) {
      background = "null";
    }
    let avatar = await canvas.loadImage(
      member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })
    );
    let can = canvas.createCanvas(120, 120);
    let ctt = can.getContext("2d");
    ctt.beginPath();
    ctt.arc(60, 60, 60, 0, Math.PI * 2, true);
    ctt.closePath();
    ctt.clip();
    ctt.drawImage(avatar, 0, 0, 120, 120);
    let buff_avatar = await can.toBuffer();
    let avatar_1 = await canvas.loadImage(buff_avatar);
    let Canvas = canvas.createCanvas(data.wsize, data.hsize);

    let ctx = Canvas.getContext("2d");
    if (background != "null") {
      try {
        ctx.drawImage(background, 0, 0, data.wsize, data.hsize);
      } catch (err) {}
    }
    ctx.drawImage(
      avatar_1,
      data.xavatar,
      data.yavatar,
      data.sxavatar,
      data.syavatar
    );
    ctx.textAlign = "center";
    ctx.fillStyle = `${data.ncolor}`;
    ctx.font = `${data.sname}px "HosamElsayed"`;
    ctx.fillText(
      member.user.username?.length > 12
        ? member.user.username.substring(0, 12) + "..."
        : member.user.username,
      data.xname,
      data.yname
    );
    let image = await Canvas.toBuffer();
    if (data.message == "null") {
      channel
        .send({
          files: [
            {
              name: "welcome.png",
              attachment: image,
            },
          ],
        })
        .catch((err) => 0);
    } else {
      let msg = data.message
        .replace("[user]", `<@${member.user.id}>`)
        .replace("[userName]", member.user.username)
        .replace("[memberCount]", member.guild.memberCount)
        .replace("[server]", member.guild.name);
      await channel
        .send({
          files: [
            {
              name: "welcome.png",
              attachment: image,
            },
          ],
        })
        .catch((err) => 0);
      channel.send({ content: msg }).catch((err) => 0);
    }
  } else if (args[0] === prefix + "restert-wec") {
    if (!data)
      return message.reply({
        content: `**❌ - لا أستطيع العثور على بيانات لهذا الخادم.**`,
      });
    await db.findOneAndDelete({
      id: message.guild.id,
    });
    message.react(`✅`);
  }
});
tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  if (error) return;
  let data = await db1.findOne({
    id: member.guild.id,
  });
  if (!data || !data.welcome) return;
  if (data.welchat == "null") return;
  let channel = member.guild.channels.cache.find((c) => c.id === data.welchat);
  if (!channel) return;
  let background;
  try {
    background = data.pic != "null" ? await canvas.loadImage(data.pic) : null;
  } catch (err) {
    background = "null";
  }
  let avatar = await canvas.loadImage(
    member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })
  );
  let can = canvas.createCanvas(120, 120);
  let ctt = can.getContext("2d");
  ctt.beginPath();
  ctt.arc(60, 60, 60, 0, Math.PI * 2, true);
  ctt.closePath();
  ctt.clip();
  ctt.drawImage(avatar, 0, 0, 120, 120);
  let buff_avatar = await can.toBuffer();
  let avatar_1 = await canvas.loadImage(buff_avatar);
  let Canvas = canvas.createCanvas(data.wsize, data.hsize);

  let ctx = Canvas.getContext("2d");
  if (background != "null") {
    try {
      ctx.drawImage(background, 0, 0, data.wsize, data.hsize);
    } catch (err) {}
  }
  ctx.drawImage(
    avatar_1,
    data.xavatar,
    data.yavatar,
    data.sxavatar,
    data.syavatar
  );
  ctx.textAlign = "center";
  ctx.fillStyle = `${data.ncolor}`;
  ctx.font = `${data.sname}px "HosamElsayed"`;
  ctx.fillText(
    member.user.username?.length > 12
      ? member.user.username.substring(0, 12) + "..."
      : member.user.username,
    data.xname,
    data.yname
  );
  let image = await Canvas.toBuffer();
  if (data.message == "null") {
    channel
      .send({
        files: [
          {
            name: "welcome.png",
            attachment: image,
          },
        ],
      })
      .catch((err) => 0);
  } else {
    let msg = data.message
      .replace("[user]", `<@${member.user.id}>`)
      .replace("[userName]", member.user.username)
      .replace("[memberCount]", member.guild.memberCount)
      .replace("[server]", member.guild.name)
      .replace("[inviter]", inviter ? `<@${inviter.id}>` : "Unknown")
      .replace("[inviterName]", inviter ? inviter.username : "Unknown")
      .replace("[invites]", invite ? invite.count : "Unknown");
    await channel
      .send({
        files: [
          {
            name: "welcome.png",
            attachment: image,
          },
        ],
      })
      .catch((err) => 0);
    channel.send({ content: msg }).catch((err) => 0);
  }
});
tracker.on("error", (guild, err) => {
  return;
});
async function verifyColor(color) {
  try {
    let colorr = color.toString().split("#").join("");
    let data = await axios.get(
      "https://api.popcat.xyz/color/" + colorr.toUpperCase()
    );
    let info = data.data;
    if (info.error === "Not valid!") {
      return false;
    } else {
      if (info.name.toLowerCase().startsWith("invalid color")) {
        return false;
      } else {
        return info.rgb;
      }
    }
  } catch (err) {
    return false;
  }
}