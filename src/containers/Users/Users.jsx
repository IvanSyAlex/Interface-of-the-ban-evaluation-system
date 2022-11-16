import {useDispatch, useSelector} from "react-redux";
import {selectUserStateEntities} from "../../store/userList/selectors";
import {useEffect} from "react";
import {loadUsersIfNotExist} from "../../store/userList/thunks/load-users";
import Users from "../../components/Users/Users";
import {selectUsersFromBannedListEntities} from "../../store/bannedList/selector";


const UsersContainer = () => {
    const dispatch = useDispatch();
    const isListUsers = useSelector((state) => selectUserStateEntities(state));
    const isBannedUsers = useSelector((state) => selectUsersFromBannedListEntities(state));
    console.log("isListUsers >>> ", isListUsers);
    useEffect(() => {
        dispatch(loadUsersIfNotExist());
    }, []);

    const loadNewPageUsers = () => {
        dispatch(loadUsersIfNotExist());
    };

    return (
        <div>
            <Users isListUsers={isListUsers} isBannedUsers={isBannedUsers} loadNewPageUsers={loadNewPageUsers}/>
        </div>
    );
}


export default UsersContainer