import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioGroup, RadioGroupProps } from '../src/radio';
import { Card, Text, ActionButton } from '../src';
const meta: Meta = {
  title: 'Radio',
  component: RadioGroup,
  parameters: {
    controls: {
      expanded: true,
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Gs8BthCViFvipFh0gknwgg/Drift-Monitors?node-id=90%3A44',
    },
  },
};

export default meta;
const DefaultChildren = (
  <>
    <Radio value="dogs" label="Dogs" />
    <Radio value="cats" label="Cats" isDisabled />
  </>
);
const Template: Story<RadioGroupProps> = args => (
  <Card title="Radio Info" style={{ width: 300 }}>
    <RadioGroup {...args}>{args.children || DefaultChildren}</RadioGroup>
  </Card>
);

export const DefaultWithLabel = Template.bind({});

export const DefaultNoLabel = Template.bind({});

export const WithMoreChildren = Template.bind({});

export const Disabled = Template.bind({});

const SomeChildren = () => (
  <>
    <Radio value="dogs" label="Dogs" />
    <Radio value="cats" label="Cats" />
    <Radio
      value="cow"
      label="Cow"
      onClick={e => {
        console.log('clicked radio option', e.currentTarget.value);
      }}
    >
      <Text textSize="small" weight="heavy">
        Text Child of Radio Component
      </Text>
      <ActionButton>Example Button</ActionButton>
    </Radio>
    <Radio value="parrot" label="Parrot" />
  </>
);

WithMoreChildren.args = {
  children: SomeChildren(),
  defaultValue: 'cats',
};

DefaultNoLabel.args = {
  defaultValue: 'parrot',
  children: SomeChildren(),
};

Disabled.args = {
  isDisabled: true,
  defaultValue: 'parrot',
  children: SomeChildren(),
};

DefaultWithLabel.args = {
  defaultValue: 'dogs',
  label: 'Here are some animals',
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing