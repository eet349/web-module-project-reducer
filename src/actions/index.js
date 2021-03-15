export const ADD_ONE = 'ADD_ONE';

export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const M_ADD = 'M_ADD';
export const M_RETRIEVE = 'M_RETRIEVE';
export const M_CLEAR = 'M_CLEAR';

export const addOne = () => {
	return { type: ADD_ONE };
};

export const applyNumber = (number) => {
	return { type: APPLY_NUMBER, payload: number };
};
export const changeOperation = (operation) => {
	return { type: CHANGE_OPERATION, payload: operation };
};
export const clearDisplay = () => {
	return { type: CLEAR_DISPLAY };
};

export const mAdd = () => {
	return { type: M_ADD };
};
export const mRetrieve = () => {
	return { type: M_RETRIEVE };
};
export const mClear = () => {
	return { type: M_CLEAR };
};
