import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { SOCKET_URL } from '../constant';
import { getMessages, sendMessage } from '../api';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';

const socket = io(SOCKET_URL);

const ChatPage = ({ userName, onLogout }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const data = await getMessages();
            setMessages(data.data);
        };

        fetchMessages();

        socket.on('message', (message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const handleSendMessage = async (messageBody) => {
        const messageData = {
            userName,
            userId: userName,
            messageBody,
            timeStamp: new Date().toISOString(),
        };
        await sendMessage(messageData);
        socket.emit('message', messageData);
    };

    const handleLogout = () => {
        localStorage.removeItem('userName');
        onLogout();
    };

    return (
        <div className="flex flex-col bg-gray-100">
            {/* Header */}
            <header className="bg-orange-500 text-white p-4 flex items-center justify-between shadow-md">
                <h1 className="text-2xl font-semibold">Realtime Chat</h1>
                <button
                    onClick={handleLogout}
                    className="bg-white text-orange-500 px-4 py-2 rounded-md hover:bg-gray-200 transition"
                >
                    Logout
                </button>
            </header>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col p-4 space-y-4">
                <MessageList messages={messages} currentUser={userName} />
                <MessageInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default ChatPage;
