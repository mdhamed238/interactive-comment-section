import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './commentSlice';
import screenReducer from './screenSlice';

export const store = configureStore({
	reducer: {
		comment: commentReducer,
		screen: screenReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
