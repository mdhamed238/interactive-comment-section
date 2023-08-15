import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import data from './data';

type User = {
	username: string;
	image: {
		webp: string;
		png: string;
	};
};

export type Comment = {
	id: number;
	content: string;
	score: number;
	createdAt: string;
	user: User;
	replyingTo: string | null;
	replies: Comment[];
};

export type State = {
	currentUser: User;
	comments: Comment[];
};

const initialState: State = {
	currentUser: data.currentUser,
	comments: data.comments,
};

export const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {
		addComment: (
			state,
			action: PayloadAction<{ content: string; username: string }>
		) => {
			state.comments.push({
				id: state.comments.length + 1,
				content: action.payload.content,
				score: 0,
				replies: [],
				createdAt: 'Now',
				replyingTo: null,
				user: state.currentUser,
			});
		},
		addReply: (
			state,
			action: PayloadAction<{
				content: string;
				replyingTo: string;
				commentId: number;
			}>
		) => {
			const { payload } = action;

			state.comments = state.comments.map((cm) => {
				if (cm.id === payload.commentId)
					return {
						...cm,
						replies: [
							...cm.replies,
							{
								id: cm.replies.length + 1,
								content: payload.content,
								createdAt: 'Now',
								replyingTo: payload.replyingTo,
								user: state.currentUser,
								score: 0,
								replies: [],
							},
						],
					};
				return cm;
			});
		},
		removeComment: (state, action: PayloadAction<number>) => {
			state.comments = state.comments.filter(
				(comment) => comment.id !== action.payload
			);
		},
		updateComment: (state, action: PayloadAction<Comment>) => {
			const { id } = action.payload;
			const index = state.comments.findIndex(
				(comment) => comment.id === id
			);
			if (index !== -1) {
				state.comments[index] = action.payload;
			}
		},
		upVoteComment: (state, action: PayloadAction<number>) => {
			const index = state.comments.findIndex(
				(comment) => comment.id === action.payload
			);
			if (index !== -1) {
				state.comments[index].score = state.comments[index].score + 1;
			}
		},
		downVoteComment: (state, action: PayloadAction<number>) => {
			const index = state.comments.findIndex(
				(comment) => comment.id === action.payload
			);
			if (index !== -1) {
				state.comments[index].score = state.comments[index].score - 1;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addComment,
	removeComment,
	updateComment,
	upVoteComment,
	downVoteComment,
} = commentSlice.actions;

export default commentSlice.reducer;
