module.exports = {
  name: 'video-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/video-page',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
