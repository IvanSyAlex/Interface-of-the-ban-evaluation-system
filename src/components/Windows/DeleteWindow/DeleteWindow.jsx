import styles from "./styles.module.css";


const DeleteWindow = ({changeStateModalWindow, deleteUserFromBannedList}) => {
    return(
        <div className={styles.modal_active}>
            <div className={styles.modal_active__panel}>
                <h2>Вы хотите удалить пользователя ?</h2>
                <div>
                    <button className={styles.modal_active__btn} onClick={deleteUserFromBannedList}>yes</button>
                    <button className={styles.modal_active__btn} onClick={() => changeStateModalWindow(false)}>no</button>
                </div>
            </div>
        </div>
    );
}


export default DeleteWindow;