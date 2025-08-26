export default [
  {
    files: ["**/*.js"],
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["eslint:recommended"],
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];
