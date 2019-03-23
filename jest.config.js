module.exports = {
    "moduleFileExtensions": ["ts", "js"],
    "transform": {
        "\\.(ts)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
      },
    "testRegex": "/*.(test).(js|ts)$",
    "collectCoverageFrom": [
      "**/*.{js,ts}",
      "!**/node_modules/**",
    ],
    // "coverageThreshold": {
    //   "global": {
    //     "branches": 60,
    //     "functions": 60,
    //     "lines": 60,
    //     "statements": 60
    //   }
    // }
  }