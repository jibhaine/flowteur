module.exports = {
  name: 'video-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/video-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
