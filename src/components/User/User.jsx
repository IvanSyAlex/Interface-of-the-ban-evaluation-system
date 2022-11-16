import {useState} from "react";
import styles from "./styles.module.css";


const User = ({firstName, lastName, avatar, setUserToListBanned}) => {
    const [ratingUser, setRatingUser] = useState(1);

    const getButtonRewardUser = (number) => {
        switch (number) {
            case 0:
                return <button className={styles['user__btn-function']} onClick={setUserToListBanned}>Banned</button>;
            case 5:
                return <button className={styles['user__btn-function']} onClick={null}>Encourage</button>;
            default:
                return;
        }
    }

    const increment = () => {
        if (ratingUser === 5) return;
        setRatingUser(ratingUser + 1);
    };

    const decrement = () => {
        if (ratingUser === 0) return;
        setRatingUser(ratingUser - 1);
    };

    return (
        <div className={styles.user}>
            <img src={avatar} alt={firstName} className={styles.user__avatar}/>
            <h3 className={styles.user__name}>{firstName} {lastName}</h3>
            <div className={styles.user__panel}>
                <button className={styles.user__btn} onClick={increment}>+</button>
                <span className={styles.user__number}> {ratingUser} </span>
                <button className={styles.user__btn}  onClick={decrement}>-</button>
                {getButtonRewardUser(ratingUser)}
            </div>
        </div>
    );
}


export default User;