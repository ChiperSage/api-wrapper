from telegram_wrapper.client import TelegramClient

# Masukkan token dari BotFather
TOKEN = "123456789:ABC-Your-Telegram-Bot-Token"
CHAT_ID = 123456789  # Ganti dengan chat_id kamu

client = TelegramClient(TOKEN)
response = client.send_message(CHAT_ID, "Hello from my Python SDK!")
print(response)
