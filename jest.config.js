module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ["./src/**"],
    coverageDirectory: 'test/coverage',
    setupFiles: ["./test/setup-tests.ts"]
};