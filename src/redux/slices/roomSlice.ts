import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserProps {
  activeRoom: any;
  roomList: any;
}

const initialState: UserProps = {
  activeRoom: null,
  roomList: null,
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    changeActiveRoom: (state, action: PayloadAction<any>) => {
      state.activeRoom = action.payload;
    },
    changeRoomList: (state, action: PayloadAction<any>) => {
      state.roomList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeActiveRoom, changeRoomList} = roomSlice.actions;

export default roomSlice.reducer;
