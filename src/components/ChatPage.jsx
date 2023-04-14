import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={"ca9b97b2-0b81-446e-921b-8bff39ecd27b"}
        username={props.user.username} 
        secret={props.user.secret} 
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatPage;