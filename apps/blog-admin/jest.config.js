module.exports = {
  name: 'blog-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/blog-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
