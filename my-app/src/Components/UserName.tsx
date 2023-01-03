import { UserData } from "../types"

interface IUserNameComponentProps {
    user: UserData
}

const UserName = ({user: {name}}: IUserNameComponentProps) => {
    return (
        <div>{name}</div>
    )
}

export default UserName