export interface User {
    name: string;
    isAdmin: boolean;
}

export interface Folder {
    id: string;
    name: string;
    parentId: string;
    folders: Folder[];
}
