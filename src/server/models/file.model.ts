export enum FileType {
  DIRECTORY = 'directory',
  FILE = 'file'
}
export interface File {
  name: string;
  path: string;
  size: number;
  type: FileType;
  children?: File[];
  extension?: string;
}
