import userListSlice from "../index";


export function loadUsersIfNotExist() {
    return function (dispatch) {
        dispatch(userListSlice.actions.startLoading());

        fetch("https://randomuser.me/api/?results=5")
            .then((response) => response.json())
            .then((restaurants) => {
                dispatch(userListSlice.actions.successLoading(restaurants));
            })
            .catch(() => {
                dispatch(userListSlice.actions.startLoading());
            });
    };
}