import {useDispatch} from "react-redux";
import bannedList from "../../store/bannedList";
import userList from "../../store/userList";
import BannedUser from "../../components/BannedUser/BannedUser";


const BannedUserContainer = ({user}) => {
    const dispatch = useDispatch();
    const removeUserToListBanned = () => {
        dispatch(bannedList.actions.deleteUserToListBanned(user));
        dispatch(userList.actions.addUserToListUsers(user));
    }
    const deleteUserFromBannedList = () => {
        dispatch(bannedList.actions.deleteUserToListBanned(user));
    }

    return (
        <div>
            <BannedUser
                firstName={user.name.first}
                lastName={user.name.last}
                avatar={user.picture.medium}
                removeUserToListBanned={removeUserToListBanned}
                deleteUserFromBannedList={deleteUserFromBannedList}
            />
        </div>

    );
}


export default BannedUserContainer;