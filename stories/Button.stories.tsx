import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../src/Button';
import { withDesign } from 'storybook-addon-designs';

const meta: Meta = {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=0%3A1',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Primary = Template.bind({});

Primary.args = { variant: 'primary', children: 'Button' };

export const PrimaryOutline = Template.bind({});

PrimaryOutline.args = { variant: 'primary', outline: true, children: 'Button' };

export const Loading = Template.bind({});

Loading.args = { variant: 'primary', loading: true, children: 'Button' };
