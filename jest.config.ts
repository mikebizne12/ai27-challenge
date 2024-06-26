// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */

module.exports = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@redux/(.*)$': '<rootDir>/src/redux/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@mocks/(.*)$': '<rootDir>/__mocks__/$1',
    '@api/(.*)$': '<rootDir>/src/services/$1',
  },

  moduleDirectories: ['node_modules', '<rootDir>/'],

  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text', 'html', 'lcov'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/pages/**/*.{tsx,jsx,ts}',
    '<rootDir>/src/**/*.{tsx,jsx,ts}',
    '!<rootDir>/src/utils/constants/*.ts',
    '!<rootDir>/src/types/*.ts',
    '!<rootDir>/src/utils/interfaces/*.ts',
    '!<rootDir>/src/utils/enums/*.ts',
    '!<rootDir>/**/*.example.ts',
  ],
  coverageThreshold: {
    global: {
      //branches: 70,
      //functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

export {};
