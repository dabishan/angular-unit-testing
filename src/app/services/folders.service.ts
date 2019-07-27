import { Folder } from '../store/types';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

const folders: Folder[] = [ // fake http response
    {id: 'file-1', name: 'File 1', parentId: null, folders: []},
    {id: 'file-2', name: 'File 2', parentId: null, folders: [
        {id: 'file-3', name: 'File 3', parentId: 'file-2', folders: []},
        {id: 'file-4', name: 'File 4', parentId: 'file-2', folders: []},
    ]},
];

@Injectable()
export class FolderService {
    getFolders(): Observable<Folder[]> {
        return of(folders);
    }
}
