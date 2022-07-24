import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import "./App.css";

export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='Admin'
			userSecret='123123'
			projectID='d8e1eccf-87ac-4b2e-98d9-d817dd4933b0'
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
		/>
	);
}

export default App;
