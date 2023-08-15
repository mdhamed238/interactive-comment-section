import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type State = {
	size: 'desktop' | 'mobile';
};

const initialState: State = {
	size: 'desktop',
};

export const screenSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		setScreen(state, action: PayloadAction<'desktop' | 'mobile'>) {
			state.size = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setScreen } = screenSlice.actions;

export default screenSlice.reducer;
