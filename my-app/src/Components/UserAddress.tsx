import { UserData } from "../types"

interface IUserAddressComponentProps {
    user: UserData
}

const UserAge = ({user: {address}}: IUserAddressComponentProps) => {
    return (
        <div><i>{address}</i></div>
    )
}

export default UserAge