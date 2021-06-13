import { PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action: PayloadAction) => {
	switch (action.type) {
		default:
			return state;
	}
};
