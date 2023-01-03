import { UserData } from "../types"

interface IUserAgeComponentProps {
    user: UserData
}

const UserAge = ({user: {age}}: IUserAgeComponentProps) => {
    return (
        <div><b>{age}</b></div>
    )
}

export default UserAge