import { useSelector } from 'react-redux'

import { selectChat } from '../../store/features/chat/chatSlice'

import ChatboxMessage from '../ChatboxMessage/ChatboxMessage'

import './ChatboxMessages.css'

const ChatBoxMessages = () => {

    const chatUsers = useSelector(selectChat).chat
    const initialUser = useSelector(selectChat).with

    return (
        <div className="ChatboxMessages">
            {
                initialUser && chatUsers.filter(user => user.id === initialUser.id)[0].messages.map(message => <ChatboxMessage key={message.id} from={message.from} text={message.text} img={initialUser.img}/>)
            }
        </div>
    )
}

export default ChatBoxMessages