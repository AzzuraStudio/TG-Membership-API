# Telegram Membership Checking API 🚀

This API allows you to check if a user is a member, admin, or creator in specified Telegram groups or channels using a Telegram bot.

## How to Use

1. **Add Your Bot to the Group/Channel**: Make sure your bot is added to the groups or channels you want to check and has administrator permissions.
2. **Make an API Request**: Use the following URL structure to make an API request:

    ```plaintext
    https://tgmembership.officialazzurastudio.workers.dev/?bot_token=YOUR_BOT_TOKEN&user_id=USER_ID&chat_id=CHAT_ID_1&chat_id=CHAT_ID_2
    ```

    Replace `YOUR_BOT_TOKEN` with your bot's token, `USER_ID` with the ID of the user you want to check, and `CHAT_ID_1`, `CHAT_ID_2`, etc., with the IDs of the Telegram groups or channels.

## Example Request

```plaintext
https://tgmembership.officialazzurastudio.workers.dev/?bot_token=123456789:ABCdefGhIjKlmnOPQRstuVWxYz&user_id=987654321&chat_id=@mytelegramgroup1&chat_id=@mytelegramchannel1&chat_id=@mytelegramgroup2
```

## Example Response

Success:

```plaintext
{
    "status": "success",
    "message": "User found as member",
    "user_id": "987654321",
    "chat_id": "@mytelegramgroup1"
}
```

Error:

```plaintext
{
    "status": "error",
    "message": "User not found in any specified chats or channels",
    "user_id": "987654321"
}
```
## Important Notice

Bot Permissions: Ensure that your bot is added to the groups or channels and has administrator permissions.

Check for Multiple Groups/Channels: You can check multiple groups or channels by adding multiple `chat_id` parameters.

## Developed By
This API was developed by AzzuraStudio. 🎉

## Contributing
Feel free to contribute to this project by submitting issues or pull requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or support, please contact us at your-email@example.com.

Happy coding! 💻✨
