/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: "<rootDir>/",
	}),
};
