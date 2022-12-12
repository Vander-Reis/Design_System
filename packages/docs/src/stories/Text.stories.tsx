import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis necessitatibus, numquam enim earum dolore rerum illo quis quasi sint vero quo doloribus nemo et quas minus facere quod",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
