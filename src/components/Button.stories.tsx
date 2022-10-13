import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me'
  },
  argTypes: {

  }
} as Meta<ButtonProps>

// VARIAÇÕES DO BUTTON
export const Default: StoryObj<ButtonProps> = {}