module.exports = {
  'roots': [
    '<rootDir>/front/javascripts'
  ],
  'testMatch': [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  'testPathIgnorePatterns': [
    '/node_modules'
  ],
  'transform': {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
}
