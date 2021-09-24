import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ActionProgress } from './ActionProgress';

export default {
  title: 'Example/ActionProgress',
  component: ActionProgress,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ActionProgress>;

const Template: ComponentStory<typeof ActionProgress> = (args) => <ActionProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'ActionProgress',
  value: 30,
  max: 100,
};


