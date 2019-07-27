import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FolderComponent } from './folder/folder.component';
import { FolderService } from './services/folders.service';
import { UserService } from './services/users.service';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { FileManagerEffects } from './store/effects';
import { TreeModule } from 'angular-tree-component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    TreeModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
    StoreModule.forRoot([appReducer]),
    EffectsModule.forRoot([FileManagerEffects]),
  ],
  providers: [
    FolderService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
