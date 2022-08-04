import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Add = () => {

    let navigate = useNavigate()
    const [inpTitle, setTitle] =useState('')
    const [inpAuthor, setAuthor] =useState('')
    const [inpDate, setDate] =useState('')
    const [inpText, setText] =useState('')

    const yubor = () => {
        let data = {
            author: inpAuthor,
            date :inpDate,
            title:inpTitle,
            text:inpText,
        }
        axios.post('https://622992dfbe12fc4538a1dbdf.mockapi.io/api/v1/todoN', data )
        .then(res => navigate('/list'))
    }
    return ( 
        <div className='add'>
            <input type='text' onChange={e => setTitle(e.target.value)}/>
            <input type='text' onChange={e => setAuthor(e.target.value)}/>
            <input type='text' onChange={e => setDate(e.target.value)}/>
            <input type='text' onChange={e => setText(e.target.value)}/>
            <button onClick={yubor}>add</button>
        </div>
    
     );
}
 
export default Add;
