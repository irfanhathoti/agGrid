import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
            .then(res => {
                setData(res)
            })
            .catch(err => {
                console.log("Error", err)
            })
    }, [])
    const [selectedData, setSelectedData] = useState('')
    console.log(selectedData)

    const toGride = ()=>{
        navigate('/grid')
    }
    return (
        <div className='parent'>
            
            <select value={selectedData} onChange={e => setSelectedData(e.target.value)}>
                <option  > --Please select the user Data --</option>
                {
                    data.map((Cur) => {
                        return (
                            <option key={Cur.id}> {Cur.name} </option>
                        )
                    })
                }
            </select>
            <button onClick={toGride} >Click</button>
        </div>
    )
}

export default Home