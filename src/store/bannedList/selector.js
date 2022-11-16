export const selectUsersFromBannedList = (state) => state.bannedList;
export const selectUsersFromBannedListEntities = (state) => selectUsersFromBannedList(state).entities;