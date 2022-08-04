import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../cssfx/Loading';
const List = () => {
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    const ochir = (x) => {
        axios.delete('https://622992dfbe12fc4538a1dbdf.mockapi.io/api/v1/todoN/' + x)
            .then(res => setReload(!reload) )
    }

    useEffect(()=> {
        axios.get('https://622992dfbe12fc4538a1dbdf.mockapi.io/api/v1/todoN') 
        .then(res => setData(res.data))
    }, [reload])

    return ( 
        <div>
            <p>{reload}</p>
        {
            data.length > 0 ?
            data.map((x, i) => {
                return (
                    <div key={i}>
                        {x.title}
                        <button onClick={() => ochir(x.id)}>delete</button>
                        <Link to={x.id}>korish</Link>
                    </div>
                )
            })
            : <Loading />
        }
        
        </div>
     );
}
 
export default List; 