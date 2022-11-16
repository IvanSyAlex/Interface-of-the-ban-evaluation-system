export const selectUserState = (state) => state?.userList;
export const selectUserStateEntities = (state) => selectUserState(state).entities;