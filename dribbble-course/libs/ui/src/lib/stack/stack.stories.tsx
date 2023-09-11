import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './stack';

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: 'Components/Stack',
  tags: ['autodocs'],
  argTypes: {
    children: {
      options: ['One', 'Two', 'Three'],
      mapping: {
        One: <b>Bold</b>,
        Two: <i>Italic</i>,
        Three: <button>Button</button>,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Stack>;

export const Horizontal = {
  args: {
    orientation: 'column',
    children: ['One', 'Two', 'Three'],
    spacing: 2,
  },
};

export const Vertical = {
  args: { orientation: 'row', children: ['One', 'Two', 'Three'] },
};
