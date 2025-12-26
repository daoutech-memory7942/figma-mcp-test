import type { Meta, StoryObj } from '@storybook/react';
import BtnSolid from './BtnSolid';

const meta = {
  title: 'Components/BtnSolid',
  component: BtnSolid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'normal', 'ghost'],
      description: '버튼 타입',
    },
    state: {
      control: 'select',
      options: ['normal', 'hover'],
      description: '버튼 상태',
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
  },
} satisfies Meta<typeof BtnSolid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary 버튼
export const Primary: Story = {
  args: {
    type: 'primary',
    state: 'normal',
    children: 'Button',
  },
};

export const PrimaryHover: Story = {
  args: {
    type: 'primary',
    state: 'hover',
    children: 'Button',
  },
};

// Secondary 버튼
export const Secondary: Story = {
  args: {
    type: 'secondary',
    state: 'normal',
    children: 'Button',
  },
};

export const SecondaryHover: Story = {
  args: {
    type: 'secondary',
    state: 'hover',
    children: 'Button',
  },
};

// Normal 버튼
export const Normal: Story = {
  args: {
    type: 'normal',
    state: 'normal',
    children: 'Button',
  },
};

export const NormalHover: Story = {
  args: {
    type: 'normal',
    state: 'hover',
    children: 'Button',
  },
};

// Ghost 버튼
export const Ghost: Story = {
  args: {
    type: 'ghost',
    state: 'normal',
    children: 'Button',
  },
};

export const GhostHover: Story = {
  args: {
    type: 'ghost',
    state: 'hover',
    children: 'Button',
  },
};

// 모든 버튼 타입 한눈에 보기
export const AllTypes: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <p className="text-xs text-gray-600 mb-2">Primary</p>
        <BtnSolid type="primary" state="normal">Primary</BtnSolid>
      </div>
      <div className="space-y-2">
        <p className="text-xs text-gray-600 mb-2">Secondary</p>
        <BtnSolid type="secondary" state="normal">Secondary</BtnSolid>
      </div>
      <div className="space-y-2">
        <p className="text-xs text-gray-600 mb-2">Normal</p>
        <BtnSolid type="normal" state="normal">Normal</BtnSolid>
      </div>
      <div className="space-y-2">
        <p className="text-xs text-gray-600 mb-2">Ghost</p>
        <BtnSolid type="ghost" state="normal">Ghost</BtnSolid>
      </div>
    </div>
  ),
};

// 다양한 텍스트 길이
export const WithDifferentTexts: Story = {
  render: () => (
    <div className="space-y-4">
      <BtnSolid type="primary">짧은 텍스트</BtnSolid>
      <BtnSolid type="primary">조금 더 긴 버튼 텍스트</BtnSolid>
      <BtnSolid type="primary">매우 긴 버튼 텍스트가 들어간 경우</BtnSolid>
    </div>
  ),
};

// Interactive Playground
export const Playground: Story = {
  args: {
    type: 'primary',
    state: 'normal',
    children: 'Button',
  },
};
