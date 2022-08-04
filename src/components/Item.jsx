import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Item = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const { id } = useParams() 

    useEffect(() => {
        axios.get('https://622992dfbe12fc4538a1dbdf.mockapi.io/api/v1/todoN/' + id)
            .then(res => {
                setData(res.data)
            }
        )
    }, [])

    return ( 
        <div>
           <h1>{data.title}</h1>
           <p>{data.text}</p>
           <h4>{data.date}</h4>
           <h5>{data.author}</h5>
           <button onClick={() => navigate(-1)} >orqaga</button>
        </div>
     );
}
 
export default Item;