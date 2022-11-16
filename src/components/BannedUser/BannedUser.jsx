import {useState} from "react";
import DeleteWindow from "../Windows/DeleteWindow/DeleteWindow";
import styles from "./styles.module.css";


const BannedUser = ({firstName, lastName,avatar, removeUserToListBanned, deleteUserFromBannedList}) => {
    const [stateModalWindow, changeStateModalWindow] = useState(false);
    const [ratingUser, setRatingUser] = useState(0);
    const increment = () => {
        if (ratingUser === 5) return;
        setRatingUser(ratingUser + 1);
    };
    const decrement = () => {
        if (ratingUser === -5) return;
        setRatingUser(ratingUser - 1);
    };

    const getButtonRewardUser = (number) => {
        switch (number) {
            case -5:
                return <button className={styles['banned_user__btn-function']} onClick={() => changeStateModalWindow(true)}>Delete User</button>;
            case 5:
                return <button className={styles['banned_user__btn-function']} onClick={removeUserToListBanned}>Move to List Users</button>;
            default:
                return;
        }
    };

    return (
        <div className={styles.banned_user}>
            <img src={avatar} alt={firstName} className={styles.banned_user__avatar}/>
            <h3 className={styles.banned_user__name}>{firstName} {lastName}</h3>
            <div className={styles.banned_user__panel}>
                <button className={styles.banned_user__btn} onClick={increment}>+</button>
                <span className={styles.banned_user__number}> {ratingUser} </span>
                <button className={styles.banned_user__btn}  onClick={decrement}>-</button>
                {getButtonRewardUser(ratingUser)}
                {stateModalWindow &&
                    <DeleteWindow changeStateModalWindow={changeStateModalWindow} deleteUserFromBannedList={deleteUserFromBannedList}/>
                }
            </div>
        </div>
    );
        // <div>
        //
        //     <h3>{firstName} {lastName}</h3>
        //     <button onClick={increment}>+</button>
        //     <span> {ratingUser} </span>
        //     <button onClick={decrement}>-</button>
        //     {getButtonRewardUser(ratingUser)}
        //     {stateModalWindow &&
        //         <DeleteWindow changeStateModalWindow={changeStateModalWindow} deleteUserFromBannedList={deleteUserFromBannedList}/>
        //     }
        // </div>);
}


export default BannedUser;

