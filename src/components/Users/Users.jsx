import UserContainer from "../../containers/User/User";
import BannedUserContainer from "../../containers/BannedUser/BannedUser";
import styles from "./styles.module.css";


const Users = ({isListUsers, isBannedUsers, loadNewPageUsers}) => {

    return (
        <div>
            <button className={styles.users__btn} onClick={loadNewPageUsers}>
                Добавить пользователей
            </button>
            <div className={styles.users__lists}>
                <div className={styles.users__list}>
                    <h2>Users</h2>
                    {Object.keys(isListUsers).map((user) => {

                        return (
                            <UserContainer
                                key={user}
                                user={isListUsers[user]}
                            />)
                    })}
                </div>
                <div className={Object.keys(isBannedUsers).length ? styles.users__list : styles.users_hidden}>
                    <h2>Banned Users</h2>
                    {Object.keys(isBannedUsers).map((user) => {

                            return (
                                <BannedUserContainer
                                    key={user}
                                    user={isBannedUsers[user]}
                                />
                            )
                        }
                    )}
                </div>
            </div>
        </div>


    );
}


export default Users;