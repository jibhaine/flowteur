module.exports = {
  name: 'anchor',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/anchor',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
