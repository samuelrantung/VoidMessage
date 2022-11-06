import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserProps {
  name: string;
  rooms: any;
}

const initialState: UserProps = {
  name: 'all',
  rooms: null,
};

export const userSlice = createSlice({
  name: 'nameChange',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    createRoom: (state, action: PayloadAction<string>) => {
      state.rooms = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeName, createRoom} = userSlice.actions;

export default userSlice.reducer;
