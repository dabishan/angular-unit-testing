import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { LoadFoldersRequest, LoadFoldersRequestCompleteAction, LoadUserRequest, LoadUserRequestCompleteAction } from './actions';
import { Actions, Effect, ofType, } from '@ngrx/effects';
import { AppState } from './state';
import { map, switchMap } from 'rxjs/operators';
import { Folder } from './types';
import { FolderService } from '../services/folders.service';
import { UserService } from '../services/users.service';

@Injectable()
export class FileManagerEffects {

    @Effect()
    loadFolders$ = this.actions$
        .pipe(
            ofType(LoadFoldersRequest),
            switchMap(() =>  this.folderServices.getFolders()),
            map((folders) => new LoadFoldersRequestCompleteAction(folders))
        );

    @Effect()
    loadUser$ = this.actions$
        .pipe(
            ofType(LoadUserRequest),
            switchMap(() => this.userServices.getUser()),
            map((user) => new LoadUserRequestCompleteAction(user))
        );

    constructor(
        private actions$: Actions,
        private folderServices: FolderService,
        private userServices: UserService,
    ) {}
}
