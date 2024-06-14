import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'filled' | 'outlined';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'filled', className }) => {
  const buttonClass = classNames(
    'px-4 py-2 rounded transition',
    {
      'bg-green-500 text-white hover:bg-green-600': variant === 'filled',
      'border border-[#07BB8F] text-black hover:bg-green-500 hover:text-white': variant === 'outlined',
    },
    className
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
