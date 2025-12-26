import type { Meta, StoryObj } from '@storybook/react';
import ButtonSet from './ButtonSet';

const meta = {
  title: 'Components/ButtonSet',
  component: ButtonSet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonSet>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 버튼 세트 (Figma 디자인과 동일)
export const Default: Story = {};

// 밝은 배경에서의 버튼 세트
export const OnLightBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-white p-8">
        <Story />
      </div>
    ),
  ],
};

// 어두운 배경에서의 버튼 세트 (기본값)
export const OnDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8">
        <Story />
      </div>
    ),
  ],
};
