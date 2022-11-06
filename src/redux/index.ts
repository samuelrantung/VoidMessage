import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './slices/userSlice';
import RoomReducer from './slices/roomSlice';

export const store = configureStore({
  reducer: {UserReducer, RoomReducer},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
