import ChatboxUsers from '../ChatboxUsers/ChatboxUsers'
import ChatboxMessagesContainer from '../ChatboxMessagesContainer/ChatboxMessagesContainer'

import './Chatbox.css'

const Chatbox = () => {
    return (
        <section className="Chatbox">
            <ChatboxUsers/>
            <ChatboxMessagesContainer/>
        </section>
    )
}

export default Chatbox