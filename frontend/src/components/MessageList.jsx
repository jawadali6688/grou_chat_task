const MessageList = ({ messages, currentUser }) => (
    <div className="flex flex-col space-y-3 overflow-y-auto h-[70vh] p-4 bg-gray-100 rounded-lg">
        {messages?.length > 0 && messages?.map((msg) => (
            <div
                key={msg._id}
                className={`flex flex-col p-3 max-w-xs rounded-2xl shadow-md ${
                    msg.userName === currentUser 
                        ? 'bg-orange-500 text-white self-end' 
                        : 'bg-white text-gray-800 self-start'
                }`}
            >
                <div className="font-semibold mb-1">
                    {msg.userName}
                </div>
                <div className="text-sm">
                    {msg.messageBody}
                </div>
                {/* Timestamp (Optional) */}
                <div className="text-xs text-gray-300 mt-1 text-right">
                    {new Date(msg.timeStamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        ))}
    </div>
);

export default MessageList;
