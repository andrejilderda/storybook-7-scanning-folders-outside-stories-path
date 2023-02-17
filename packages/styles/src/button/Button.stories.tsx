import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Styles/Button in Styles package",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export default meta;
