import { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center p-2 bg-white border-t-2 border-secondary">
            <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow p-2 border rounded-md"
            />
            <button
                type="submit"
                className="ml-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
                Send
            </button>
        </form>
    );
};

export default MessageInput;
