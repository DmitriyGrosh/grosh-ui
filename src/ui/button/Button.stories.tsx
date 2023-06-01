import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
export default {
	title: "GroshUI/Button",
	component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Hello world !</Button>;

export const HelloWorld = Template.bind({});

export const ClickMe = Template.bind({});
