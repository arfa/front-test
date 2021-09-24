import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HiArrowRight } from 'react-icons/hi';

import { ActionTitle } from './ActionTitle';

export default {
  title: 'Example/ActionTitle',
  component: ActionTitle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ActionTitle>;

const Template: ComponentStory<typeof ActionTitle> = (args) => <ActionTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'ActionTitle',
  icon: <HiArrowRight />
};

