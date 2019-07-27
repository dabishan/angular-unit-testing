import { User, Folder } from './types';

export class AppState {
    user: User;
    folders: Folder[];
    processing: boolean;

    constructor() {}
}
