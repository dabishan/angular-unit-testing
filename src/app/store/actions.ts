import { Action } from '@ngrx/store';
import { Folder, User } from './types';

export const LoadFoldersRequest = 'LoadFoldersRequest';
export const LoadFoldersRequestComplete = 'LoadFoldersRequestComplete';
export const LoadUserRequest = 'LoadUserRequest';
export const LoadUserRequestComplete = 'LoadUserRequestComplete';
export const SetCurrentFolder = 'SetCurrentFolder';

export class LoadFoldersRequestAction implements Action {
    readonly type = LoadFoldersRequest;
    constructor() {}
}

export class LoadFoldersRequestCompleteAction implements Action {
    readonly type = LoadFoldersRequestComplete;

    constructor(
        public readonly payload: Folder[],
    ) {}
}

export class LoadUserRequestAction implements Action {
    readonly type = LoadUserRequest;
    constructor() {}
}

export class LoadUserRequestCompleteAction implements Action {
    readonly type = LoadUserRequestComplete;

    constructor(
        public readonly payload: User,
    ) {}
}

export class SetCurrentFolderAction implements Action {
    readonly type = SetCurrentFolder;
    constructor(
        public readonly payload: Folder,
    ) {}
}

export type AppActions = LoadFoldersRequestAction
    | LoadFoldersRequestCompleteAction
    | LoadUserRequestAction
    | LoadUserRequestCompleteAction;
