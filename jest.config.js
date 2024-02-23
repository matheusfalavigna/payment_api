module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./src",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageDirectory: "./coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  collectCoverageFrom: ["**/src/**/*.{ts,tsx}", "!**/node_modules/**"],
  watchPathIgnorePatterns: ["**/node_modules/**"],
};
