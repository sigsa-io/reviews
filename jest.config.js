const path = require('path');

const TEST_DIR = path.join(__dirname, '/test/Jest/setupTests.js');

module.exports = {
  setupFiles: [
    TEST_DIR,
  ],
};
