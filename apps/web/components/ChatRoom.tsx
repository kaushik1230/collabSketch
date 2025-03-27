import { BACKEND_URL } from "../app/config";
import axios from "axios";
import { ChatroomClient } from "./ChatRoomClient";
async function getChats(roomId: string) {
  const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
  return response.data.messages;
}

export async function ChatRoom({ id }: { id: string }) {
  const messages = await getChats(id);
  return <ChatroomClient messages={messages} id={id} />;
}
