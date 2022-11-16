import {createSlice} from "@reduxjs/toolkit";


const bannedListSLice = createSlice({
    name: "banned user",
    initialState: {
        entities: {},
        status: "notStarted",
    },
    reducers: {
        addUserToListBanned: (state, action) => {
            const uuid = action.payload.login.uuid;
            state.entities = {...state.entities, [uuid]: action.payload};
            state.status = "listIsNotEmpty";
        },
        deleteUserToListBanned: (state, action) => {
            const uuid = action.payload.login.uuid;
            state.entities = Object.keys(state.entities)
                .filter((element) => element !== uuid)
                .reduce((acc, key) => {
                   acc[key] =  state.entities[key]
                    return acc;
                },{});
        },
    },
});


export default bannedListSLice;