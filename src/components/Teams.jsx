'use client'

import TeamCard from "./TeamCard"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Teams(){
    const [user, setUser] = useState([])
    useEffect(()=>{
        async function fetchData(){
            try {
                const {data} = await axios.get('https://randomuser.me/api/?results=5')
                setUser(data.results)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [])
    const jobs = ["Founder", "Tech Lead", "Digital Marketing", "Software Engineer", "Designer"]
    const experience = ['Merakit lebih dari 500 PC' , 'Memimpin dan membimbing puluhan karyawan sejak 2005', 'Telah memasarkan dan menjual lebih dari 450 PC', "Menciptakan cara termudah untuk merakit PC", "Telah mendesign ratusan PC agar terlihat menakjubkan."]

    return(
        <div className="my-5 flex flex-wrap flex-cols w-full gap-4 justify-center">
            {user.map((data, index)=>{
                return <TeamCard key={index} data = {data} job = {jobs[index]} experience = {experience}/>
            })}
        </div>
    )
}