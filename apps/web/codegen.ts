import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/v1/graphql",
  documents: ["app/**/*.tsx", "app/**/*.ts", "!app/generated/gql/**/*"],
  generates: {
    "app/generated/gql/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
        scalars: {
          "uuid": "string"
        },
      },
      presetConfig: {
        // recommended by graphql-codegen since it's not actually a react hook
        // https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#the-usefragment-helper
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' }
      }
    }
  }
};

export default config;
