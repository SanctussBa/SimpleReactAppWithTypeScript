import React from "react"
import { UserData } from "../types"

interface IUserNameChangeComponentProps {
    user: UserData,
    onNameChanged(e: React.ChangeEvent<HTMLInputElement>): void
}

const UserNameChange = ({user: {name}, onNameChanged}: IUserNameChangeComponentProps) => {
    return (
        <div>
            <h2>Change the name of '{name}' here</h2>
            <input type="text" value={name} onChange={onNameChanged}></input>
        </div>
        
    )
}

export default UserNameChange