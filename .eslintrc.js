module.exports = {
  root: true,
  extends: ["@hasura-neon-previews/eslintrc"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
