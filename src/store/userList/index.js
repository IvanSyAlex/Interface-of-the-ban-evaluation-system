import {createSlice} from "@reduxjs/toolkit";


const userListSlice = createSlice({
    name: " user",
    initialState: {
        entities: {},
        status: "notStarted",
    },
    reducers: {
        startLoading: (state) => {
            state.status = "loading";
        },
        successLoading: (state, action) => {
            state.entities = (action.payload.results || []).reduce((acc, user) => {
                acc[user.login.uuid] = user;
                return acc;
            }, {...state.entities});
            state.status = "success";
        },
        addUserToListUsers: (state, action) => {
            const uuid = action.payload.login.uuid;
            state.entities = {...state.entities, [uuid]: action.payload};
            state.status = "listIsNotEmpty";
        },
        deleteUserToListUsers: (state, action) => {
            const uuid = action.payload.login.uuid;
            state.entities = Object.keys(state.entities)
                .filter((element) => element !== uuid)
                .reduce((acc, key) => {
                    acc[key] = state.entities[key]
                    return acc;
                }, {});
        },
    },

});


export default userListSlice;