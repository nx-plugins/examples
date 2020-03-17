module.exports = {
  name: 'sample-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sample-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
