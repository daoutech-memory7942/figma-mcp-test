import React, { useState, useEffect } from 'react';

// Primary Button Component
const PrimaryButton = ({ children, size = 'md', rounded = 'md', onClick, disabled = false }) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        ${roundedClasses[rounded]}
        bg-blue-600 text-white
        hover:bg-blue-700
        transition
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {children}
    </button>
  );
};

// Secondary Button Component
const SecondaryButton = ({ children, size = 'md', rounded = 'md', onClick, disabled = false }) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        ${roundedClasses[rounded]}
        bg-gray-600 text-white
        hover:bg-gray-700
        transition
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {children}
    </button>
  );
};

// Outline Button Component
const OutlineButton = ({ children, color = 'blue', size = 'md', rounded = 'md', onClick, disabled = false }) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  const colorClasses = {
    blue: 'border-blue-600 text-blue-600 hover:bg-blue-600',
    green: 'border-green-600 text-green-600 hover:bg-green-600',
    red: 'border-red-600 text-red-600 hover:bg-red-600',
    purple: 'border-purple-600 text-purple-600 hover:bg-purple-600',
    gray: 'border-gray-600 text-gray-600 hover:bg-gray-600'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        ${roundedClasses[rounded]}
        ${colorClasses[color]}
        border-2
        hover:text-white
        transition
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {children}
    </button>
  );
};

// Status Button Component
const StatusButton = ({ children, variant = 'success', size = 'md', rounded = 'md', onClick, disabled = false }) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  const variantClasses = {
    success: 'bg-green-600 hover:bg-green-700',
    warning: 'bg-yellow-500 hover:bg-yellow-600',
    danger: 'bg-red-600 hover:bg-red-700',
    info: 'bg-indigo-600 hover:bg-indigo-700'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        ${roundedClasses[rounded]}
        ${variantClasses[variant]}
        text-white
        transition
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {children}
    </button>
  );
};

// Icon Button Component
const IconButton = ({ children, icon, variant = 'primary', size = 'md', rounded = 'md', onClick, disabled = false }) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    success: 'bg-green-600 hover:bg-green-700',
    danger: 'bg-red-600 hover:bg-red-700',
    warning: 'bg-yellow-500 hover:bg-yellow-600'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        ${roundedClasses[rounded]}
        ${variantClasses[variant]}
        text-white
        flex items-center gap-2
        transition
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {icon}
      {children}
    </button>
  );
};

// Main ButtonSet Demo Component
const ButtonSet = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to 'light' mode
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark';
    setIsDark(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-8 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Tailwind Button Set - React</h1>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300 flex items-center gap-2"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            )}
            <span className="font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        {/* Primary Buttons */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Primary Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton rounded="sm">Primary</PrimaryButton>
            <PrimaryButton rounded="md">Primary MD</PrimaryButton>
            <PrimaryButton rounded="lg">Primary LG</PrimaryButton>
            <PrimaryButton rounded="full">Primary Full</PrimaryButton>
          </div>
        </section>

        {/* Secondary Buttons */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Secondary Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <SecondaryButton rounded="sm">Secondary</SecondaryButton>
            <SecondaryButton rounded="md">Secondary MD</SecondaryButton>
            <SecondaryButton rounded="lg">Secondary LG</SecondaryButton>
            <SecondaryButton rounded="full">Secondary Full</SecondaryButton>
          </div>
        </section>

        {/* Outline Buttons */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Outline Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <OutlineButton color="blue" rounded="sm">Outline</OutlineButton>
            <OutlineButton color="green" rounded="md">Outline Success</OutlineButton>
            <OutlineButton color="red" rounded="lg">Outline Danger</OutlineButton>
            <OutlineButton color="purple" rounded="full">Outline Purple</OutlineButton>
          </div>
        </section>

        {/* Status Buttons */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Status Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <StatusButton variant="success" rounded="lg">Success</StatusButton>
            <StatusButton variant="warning" rounded="lg">Warning</StatusButton>
            <StatusButton variant="danger" rounded="lg">Danger</StatusButton>
            <StatusButton variant="info" rounded="lg">Info</StatusButton>
          </div>
        </section>

        {/* Size Variants */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Size Variants</h2>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton size="sm" rounded="md">Small</PrimaryButton>
            <PrimaryButton size="md" rounded="md">Medium</PrimaryButton>
            <PrimaryButton size="lg" rounded="md">Large</PrimaryButton>
            <PrimaryButton size="xl" rounded="md">Extra Large</PrimaryButton>
          </div>
        </section>

        {/* Disabled States */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Disabled States</h2>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton disabled rounded="md">Disabled</PrimaryButton>
            <OutlineButton disabled rounded="md">Disabled Outline</OutlineButton>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Icon Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <IconButton
              variant="primary"
              rounded="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                </svg>
              }
            >
              Add Item
            </IconButton>
            <IconButton
              variant="success"
              rounded="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              }
            >
              Confirm
            </IconButton>
            <IconButton
              variant="danger"
              rounded="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              }
            >
              Delete
            </IconButton>
          </div>
        </section>
      </div>
    </div>
  );
};

// Export individual components
export {
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  StatusButton,
  IconButton
};

// Export default demo component
export default ButtonSet;
