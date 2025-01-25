import path from "path";
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../app/**/components/**/*.stories.@(js|jsx|ts|tsx)", // Chemin vers vos stories
    "../app/**/*.stories.@(js|jsx|ts|tsx)",       // Ajoutez d'autres chemins si nécessaire
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        "@": path.resolve(__dirname, "../"), 
        "react-leaflet": path.resolve(__dirname, "../node_modules/react-leaflet"),// Correspond à "@/*" dans tsconfig.json
      },
    };
    return config;
  },
};

export default config;
