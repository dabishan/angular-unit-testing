import { AppState } from './state';
import { AppActions, LoadFoldersRequestComplete, LoadUserRequestComplete } from './actions';

const initialState: AppState = {
    folders: [],
    processing: false,
    user: null,
}
export function appReducer(
    state: AppState = initialState,
    action: AppActions
) {
    switch (action.type) {
        case LoadFoldersRequestComplete:
            return {...state, folders: action.payload };

        case LoadUserRequestComplete:
            return {...state, user: action.payload };

        default:
            return state;
    }
}
