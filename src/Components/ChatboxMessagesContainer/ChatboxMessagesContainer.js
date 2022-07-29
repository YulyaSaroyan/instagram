import ChatboxMessagesHeader from "../ChatboxMessagesHeader/ChatboxMessagesHeader"
import ChatboxMessages from "../ChatboxMessages/ChatboxMessages"
import ChatboxMessageForm from "../ChatboxMessageForm/ChatboxMessageForm"

import './ChatboxMessagesContainer.css'

const ChatboxMessagesContainer = () => {

    return (
        <div className="ChatboxMessagesContainer">
            <ChatboxMessagesHeader/>
            <ChatboxMessages/>
            <ChatboxMessageForm/>
        </div>
    )
}

export default ChatboxMessagesContainer