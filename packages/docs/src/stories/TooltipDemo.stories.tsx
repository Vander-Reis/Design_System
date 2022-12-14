import type { StoryObj, Meta } from "@storybook/react";
import { Tooltip, Button, TooltipProps } from "@vander-ignite-ui/react";

export default {
  title: "Surfaces/Tooltip",
  component: Tooltip,
  args: {
    children: <Button>Hover me </Button>,
    content: "26 de Outubro - Disponível",
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
