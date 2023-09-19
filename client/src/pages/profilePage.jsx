import { FaUserSecret } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

import { Card, Label } from "../components/generalComponents";
import { useAuth } from "../context/authContext";

function ProfilePage() {
    const { user } = useAuth();
    return (
        <Card>
            <Label htmlFor="username">
                <FaUserSecret className="text-2xl" /> Username
            </Label>
            <p className="m-7 text-left text-lg">{user.username}</p>

            <Label htmlFor="email">
                <MdAlternateEmail className="text-2xl" /> Email
            </Label>
            <p className="m-7 text-left text-lg">{user.email}</p>
        </Card>
    )
}

export default ProfilePage;