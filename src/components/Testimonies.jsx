'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import Testimony from "./Testimony"


export default function Testimonies(){
    const [testi, setTesti] = useState([])
    useEffect(()=>{
        async function fetchData(){
            try {
                const {data} = await axios.get('http://localhost:3000/testimoni')
                setTesti(data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [])

    return <div className="m-12">
        <h2 className="text-center text-3xl font-bold mb-2">Testimony</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {testi.map((data)=>{
            return <Testimony key={data.id} data = {data}/>
        })}
    </div>
    </div>
}