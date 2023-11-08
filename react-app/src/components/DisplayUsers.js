import {useState} from "react";


const BASE_URL = "http://127.0.0.1:8000/test/some_users"

function DisplayUsers(){
    var [users, setUsers] = useState([])

    const getUsers = async () => {
        const respose = await fetch(BASE_URL)
        const data = await respose.json()
        setUsers(data["users"])
    }

    return (
        <>  
            <button onClick={getUsers}>
                Load users
            </button>
            {users.map((user, index) => {
                return (
                <ul id={index} className="user">
                    {"{"}
                        {Object.entries(user).map(([key, value]) => {
                            return (
                            <li id={`${key}${value}`}>
                                 {key}: {value},
                            </li>
                            )
                        })}
                    {"}"}    
                </ul>
                )
            })}
        </>
    );
}

export default DisplayUsers;