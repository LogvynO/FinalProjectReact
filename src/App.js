import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import "./App.css";

const projectID = "d8e1eccf-87ac-4b2e-98d9-d817dd4933b0";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;
