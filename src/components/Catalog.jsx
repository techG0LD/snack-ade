import {useState, useEffect} from 'react'


export default function Catalog() {
    const [snacks,setSnacks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/snacks/')
            const json = await response.json()
            setSnacks(json)
        }
        fetchData()
    }, [])


    return (
        <div>
            <h1>Catalog</h1>
            <ul>
                {snacks.map((snack,index) => (
                    <li key={index} style = {{padding: '30px'}}>
                        <div>{snack.name}</div>
                        <div>{snack.vendor}</div>
                        <img src={snack.img} alt='Picture of snack'/>
                        <div>{snack.price}</div>
                        <div>{snack.desc}</div>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}