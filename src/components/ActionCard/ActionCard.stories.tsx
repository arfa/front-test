import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ActionCard } from './ActionCard';
import { ActionProgress } from '../ActionProgress/ActionProgress';
import { HiArrowRight } from 'react-icons/hi';

export default {
  title: 'Example/ActionCard',
  component: ActionCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ActionCard>;

const Template: ComponentStory<typeof ActionCard> = (args) => <ActionCard {...args} />;

export const WithProgress = Template.bind({});
WithProgress.args = {
  actionLabel: 'actionLabel',
  progressLabel: 'progressLabel',
  children: <ActionProgress id={'id'} value={30} max={100} label={'progressLabel'} />,
  value: 30,
  max: 100,
  icon: <HiArrowRight />
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  actionLabel: 'actionLabel',
  progressLabel: 'progressLabel',
  children: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur?</p>,
  value: 30,
  max: 100,
  icon: <HiArrowRight />
};

