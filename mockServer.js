const snapstub = require('snapstub');

// starts the mock server
snapstub.start({
  verbose: true,
  mockFolderName: '__mocks__',
  port: 8080
});
