const { Telegraf } = require('telegraf');
// Thay thế chuỗi bên dưới bằng Token mới tinh vừa tạo từ @BotFather
const BOT_TOKEN = '9001402578:AAFr0uRt9VnpngXyUTlSsqqchvNtuBqL9GQ';
const bot = new Telegraf(BOT_TOKEN);
// Xử lý lệnh /start
bot.start((ctx) => {
    ctx.reply('👋 Chào bạn! Bot hệ thống đã khởi động thành công và sẵn sàng hoạt động.');
});
// Lệnh mẫu bổ sung để test phản hồi text
bot.hears('hi', (ctx) => {
    ctx.reply('Chào bạn, bot đang hoạt động rất tốt!');
});
// Khởi động bot
bot.launch();
console.log('Bot Telegram đã khởi động thành công!');
// Kích hoạt dừng an toàn khi tắt ứng dụng
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
