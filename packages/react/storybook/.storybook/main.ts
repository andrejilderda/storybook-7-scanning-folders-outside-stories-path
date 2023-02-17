import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // stories: ["./../**/*.mdx", "./../../**/*.stories.@(js|jsx|ts|tsx)"],
  stories: [
    // here I expect the glob to only match files in the root of the packages/react directory
    // but it matches files in the root of the entire monorepo
    "../../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
