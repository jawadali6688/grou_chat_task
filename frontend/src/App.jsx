import { useState } from 'react';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';

const App = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

    return (
        <div className="h-screen">
            {userName ? (
                <ChatPage userName={userName} onLogout={() => setUserName('')} />
            ) : (
                <LoginPage onLogin={setUserName} />
            )}
        </div>
    );
};

export default App;
