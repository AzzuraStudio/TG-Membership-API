addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url)
    const params = url.searchParams

    // Extract parameters from the query string
    const botToken = params.get('bot_token')
    const userId = params.get('user_id')
    const groupsAndChannels = params.getAll('chat_id')

    if (!botToken || !userId || groupsAndChannels.length === 0) {
        return new Response(JSON.stringify({
            status: "error",
            message: "Missing required parameters"
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    for (const chatId of groupsAndChannels) {
        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/getChatMember?chat_id=${chatId}&user_id=${userId}`

        const response = await fetch(telegramApiUrl)
        const result = await response.json()

        if (result.ok && ['member', 'administrator', 'creator'].includes(result.result.status)) {
            return new Response(JSON.stringify({
                status: "success",
                message: `User found as ${result.result.status}`,
                user_id: userId,
                chat_id: chatId
            }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    return new Response(JSON.stringify({
        status: "error",
        message: "User not found in any specified chats or channels",
        user_id: userId
    }), {
        status: 404,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// HOW TO USE API:
// Important: The bot must be added to the specified groups or channels and must have administrator permissions.
// API URL example: 
// https://tgmembership.officialazzurastudio.workers.dev/?bot_token=123456789:ABCdefGhIjKlmnOPQRstuVWxYz&user_id=987654321&chat_id=@mytelegramgroup1&chat_id=@mytelegramchannel1&chat_id=@mytelegramgroup2
          
