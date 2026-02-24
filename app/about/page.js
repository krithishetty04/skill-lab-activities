import React from 'react'
import Link from 'next/link' 


export function  UserData({name}){
    return (
        <div>
        <h1>{name}</h1>
        <h2> {role}</h2>

        </div>
        
    )
}
export default function page() {
  return (
    <div>
        <UserData name="Krithi S Shetty" role="Developer" />
    </div>
  )
}   
        
    