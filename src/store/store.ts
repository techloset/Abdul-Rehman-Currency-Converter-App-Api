import { configureStore } from '@reduxjs/toolkit';
import converterReducer from './reducer/converterReducer';

const store = configureStore({
  reducer: converterReducer
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch