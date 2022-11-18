import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react"

const UseToken = email => {
    const [token , setToken ] = useState('')

useEffect(() => {
   if(email) {
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.accessToken) {

            localStorage.setItem('token', data.accessToken)
            setToken(data.accessToken)
        }
    }
    )
   }
  } , [email]);
  return [token]
}

export default UseToken ;
