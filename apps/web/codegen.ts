import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/v1/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts", "!src/generated/gql/**/*"],
  generates: {
    "src/generated/gql/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
      }
    }
  }
};

export default config;
