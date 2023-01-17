import React ,{useState, useEffect} from 'react'
import User from './User'
import axios from 'axios'

const UserList = () => {
    const [listOfUser,setListOfUser] = useState([])
    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => setListOfUser(res.data))
          .catch((err) => console.log(err));
    
    }, [ ])
  return (
    <div>
        {listOfUser.map((user)=> <User user={user}/>)}
    </div>
  )
}

export default UserList