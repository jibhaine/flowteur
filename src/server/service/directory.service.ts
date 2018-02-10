import * as directoryTree from 'directory-tree';
import { Injectable } from '@angular/core';
import { File } from '../models';

@Injectable()
export class DirectoryService {
  constructor() {

  }
  getFolder(path: string): Promise<File> {
    return new Promise((resolve, reject) => {
      const tree = directoryTree(path);
      resolve(tree as File);
    });
  }
}
