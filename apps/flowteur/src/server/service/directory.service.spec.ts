import * as path from 'path';
import { DirectoryService } from '.';

const testRootPath = path.join(__dirname, '__tests__', 'test-dir');

describe('DirectoryService', () => {
  let service: DirectoryService;
  beforeEach(() => {
    service = new DirectoryService();
  });
  it('gets the folder structure of a directory', done => {
    service.getFolder(testRootPath)
            .then(
              value => {
                expect(value).toBeDefined();
                expect(value.name).toBe('test-dir');
                expect(value.path).toBe(testRootPath);
                expect(value.size).toBeCloseTo(383631);
                expect(value.type).toBe('directory');
                done();
              },
              reason => {
                console.error(reason);
                done.fail(reason);
              });
  });
});
