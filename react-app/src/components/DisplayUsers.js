import {useEffect, useState} from "react";


const BASE_URL = "http://127.0.0.1:8000/test/some_users"

function DisplayUsers(){
    var [users, setUsers] = useState([])

    var getUsers = async () => {
        var respose = await fetch(BASE_URL)
        var data = await respose.json()
        setUsers(data["users"])
    }

    useEffect(getUsers, 
    [])

    console.log(users)

    return (
        <>  
            {users.map((user, index) => {
                return (
                <div id={index} className="user">
                        {Object.entries(user).map((key, value) => {
                            return (
                            <p id={`${key}${value}`}>
                                {key} : {value}
                            </p> 
                            )
                        })}
                </div>
                )
            })}
        </>
    );
}

export default DisplayUsers;