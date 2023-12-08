import { get } from 'http'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {User} from '../../interfaces/AppInterface'
import { users } from './UserListData'

export default function UserProfile(){
    

    const {id} = useParams()

    const [currentUser, setCurrentUser] = useState<User>()

    useEffect(()=>{
        const user = users.find((user) => user.id === id)
        setCurrentUser(user)
    })

    return(
        <main className='user-profile'>
            <h1>{currentUser?.firstname} {currentUser?.lastname}</h1>
            <p>{currentUser?.bio}</p>
        </main>
    )
}