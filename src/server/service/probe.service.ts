// import { Injectable } from '@angular/core';
import * as childProcess from 'child_process';
import { File } from '../models';

/**
 * a service to call `ffprobe` with json options
*/
// @Injectable()
export class ProbeService {
  constructor() {

  }

  public command = (filePath) => `ffprobe -v quiet -print_format json -show_format -show_streams "${filePath}"`;

  public probeFile(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      childProcess.exec(this.command(filePath), (error: Error, stdout: string, stderr: string) => {
        console.log(stdout);
        console.log(stderr);
        if (error) {
          reject({error, stderr});
        }
        resolve(JSON.parse(stdout) as File);
      });
    });
  }
}
