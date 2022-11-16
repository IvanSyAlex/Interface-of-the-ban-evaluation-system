import {configureStore} from "@reduxjs/toolkit";
import userListSlice from "./userList";
import bannedListSLice from "./bannedList";


const rootReducer = (state, action) => ({
    userList: userListSlice.reducer(state?.userList, action),
    bannedList: bannedListSLice.reducer(state?.bannedList, action),
})

export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
    ],
});