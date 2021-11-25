import React from 'react'
import { useDispatch } from "react-redux";
import{ login ,logout} from "../features/user";


function Login() {

    const dispatch = useDispatch();
    return (
        <div>
            <button onClick = {() => {
                dispatch(Login({name: "saranya", age: 22, email: "sar@gmail.com"}));
            }}
                  >
                      Login
                        </button>

                        <button
                        onClick={() => {
                            dispatch(logout({name: "saranya", age: 22, email: "sar@gmail.com"}));
                        }}
                        >
                            LOGOUT
                        </button>
        </div>
    )
}

export default Login
