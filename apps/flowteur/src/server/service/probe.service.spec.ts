import * as path from 'path';
import { ProbeService } from '.';

const goodFilePath = path.join(__dirname, '__tests__', 'test-dir', 'test-subdir-a', 'sample.mp4');

const errorFilePath = path.join(__dirname, '__tests__', 'test-dir', 'test-subdir-b', 'test-file.mp4');

describe('ProbeService', () => {

  let service: ProbeService;

  beforeEach(() => {
    service = new ProbeService();
  });

  it('gets the file info with ffprobe withen in error', done => {
    service.probeFile(errorFilePath)
            .then(
              value => {
                done.fail();
              },
              reason => {
                expect(reason).toBeDefined();
                console.error(reason);
                done();
              }
            )
            .catch(done.fail);
  });

  it('gets the file info with ffprobe', done => {
    return service.probeFile(goodFilePath)
            .then(
              value => {
                expect(value).toBeDefined();
                expect(value.streams.length).toBe(2);
                expect(value.format.filename).toEqual(goodFilePath);
                console.log(value);
                done();
              },
              reason => {
                console.error(reason);
                done.fail(reason);
              }
            );
  });

});
