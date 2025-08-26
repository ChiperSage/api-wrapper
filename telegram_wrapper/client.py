import requests
from .exceptions import TelegramAPIError

class TelegramClient:
    def __init__(self, token: str):
        self.base_url = f"https://api.telegram.org/bot{token}/"

    def send_message(self, chat_id: int, text: str, parse_mode: str = "Markdown"):
        url = self.base_url + "sendMessage"
        payload = {"chat_id": chat_id, "text": text, "parse_mode": parse_mode}
        response = requests.post(url, json=payload)

        if response.status_code != 200:
            raise TelegramAPIError(response.text)
        return response.json()

    def get_updates(self, offset=None, timeout=30):
        url = self.base_url + "getUpdates"
        params = {"timeout": timeout, "offset": offset}
        response = requests.get(url, params=params)

        if response.status_code != 200:
            raise TelegramAPIError(response.text)
        return response.json()
