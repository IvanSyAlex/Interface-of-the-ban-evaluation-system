import User from "../../components/User/User";
import {useDispatch} from "react-redux";
import bannedList from "../../store/bannedList";
import userList from "../../store/userList";


const UserContainer = ({user}) => {
    const dispatch = useDispatch();
    const setUserToListBanned = () => {
        dispatch(bannedList.actions.addUserToListBanned(user));
        dispatch(userList.actions.deleteUserToListUsers(user))
    }

    return (
        <User
            firstName={user.name.first}
            lastName={user.name.last}
            avatar={user.picture.medium}
            setUserToListBanned={setUserToListBanned}
        />
    );
}


export default UserContainer;