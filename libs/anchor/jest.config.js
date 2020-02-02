module.exports = {
  name: 'anchor',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/anchor',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
