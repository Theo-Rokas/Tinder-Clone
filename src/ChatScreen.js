import React from 'react'
import { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Elon',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
            message: 'Whats up'
        },
        {
            name: 'Elon',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
            message: 'Hows it going'
        },
        {
            message: 'Hows it going'
        }
    ])

    const handleSubmit = (e) => {
        e.preventDefault()

        setMessages([...messages, { message: input }])
        setInput('')
    }

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH ELON ON 10/08/20</p>
            
            {messages.map((message) => (
                message.name ? (
                   <div className='chatScreen__message'>
                        <Avatar
                            className='chatScreen__image'
                            alt={message.name}
                            src={message.image} />

                        <p className='chatScreen__text'>{message.message}</p>
                    </div> 
                ) :
                (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div> 
                )                
            ))}

            <form className='chatScreen__input'>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='chatScreen__inputField'
                    type="text" 
                    placeholder='Type a message...'/>

                <button 
                    onClick={handleSubmit}
                    type='submit'
                    className='chatScreen__inputButton'>

                    SEND
                </button>
            </form>
        </div>
    )
}

export default ChatScreen
