import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
    return (
        <div className='chats'>
            <Chat 
                name='Elon Musk'
                message='Yo whats up!'
                timestamp='40 seconds ago'
                profilePic='https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg' />

            <Chat 
                name='Steve Jobs'
                message='Yo whats up!'
                timestamp='35 seconds ago'
                profilePic='https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg' />

            <Chat 
                name='Bill Gates'
                message='Yo whats up!'
                timestamp='30 seconds ago'
                profilePic='https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg' />

            <Chat 
                name='Mark Zuckerberg'
                message='Yo whats up!'
                timestamp='25 seconds ago'
                profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg' />
        </div>
    )
}

export default Chats
