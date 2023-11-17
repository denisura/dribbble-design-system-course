import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Basic = {
  args: { title: 'This is default header!' },
};
