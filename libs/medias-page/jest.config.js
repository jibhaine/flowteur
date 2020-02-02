module.exports = {
  name: 'medias-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/medias-page',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
