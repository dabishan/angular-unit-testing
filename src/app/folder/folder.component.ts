import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TREE_ACTIONS } from 'angular-tree-component';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { Folder } from '../store/types';
import { LoadFoldersRequestAction, SetCurrentFolderAction } from '../store/actions';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit, OnDestroy {

  @ViewChild('tree')
  public tree: any;

  public folderNodes: Folder[] = [];
  private currentFolder: Folder;
  // private isAdmin: Boolean = false;
  private subs: Subscription[] = [];

  public treeOptions = {
    idField: 'id',
    childrenField: 'folders',
    nodeHeight: 36,
    allowDrag: true,
    useVirtualScroll: true,
    actionMapping: {
      mouse: {
        contextMenu: (tree, node, $event) => {
          $event.preventDefault();
        },
        click: (tree, node, $event) => {
          TREE_ACTIONS.SELECT(tree, node, $event);
          this.onTreeClickNode(node);
        },
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) {
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
          }
        }
      },
    }
  };

  constructor(
    public store: Store<AppState>,
  ) {}

  ngOnInit() {
    // this.subs.push(
    //   this.store.select('user').subscribe(user => {
    //     this.isAdmin = (user) ? user.isAdmin : false;
    //   })
    // );

    this.subs.push(
      this.store.subscribe(state => {

        this.folderNodes = [].concat(state[0].folders);
        this.refreshTree();
      })
    );

    this.loadTree();
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  loadTree() {
    this.store.dispatch(new LoadFoldersRequestAction());
  }

  refreshTree() {
    this.tree.treeModel.update();

    if (this.currentFolder) {
      const foundNode = this.tree.treeModel.getNodeById(this.currentFolder.id);
      if (foundNode) {
        foundNode.setActiveAndVisible();
      }
    }
  }

  private setCurrentFolderAndDispatch(folder: Folder): void {
    this.currentFolder = folder;
    this.store.dispatch(new SetCurrentFolderAction(folder));
  }

  public onTreeClickNode(node) {
    if (node) {
      this.setCurrentFolderAndDispatch(node.data);
    }
  }
}
