import React from 'react';
import './button.css';
import Lottie from 'react-lottie';

interface ButtonProps {
  /**
   * Controls which variant of the button will be rendered
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  
  /**
   * How large should the button be?
   */
  size?: 'large' | 'mini';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * This will control different states of the button 
   */
  state?: 'loading' | 'enabled' | 'disabled';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'large',
  label,
  state = 'enabled',
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        'europa-button',
        `europa-button--${size}`,
        `europa-button--${variant}`,
        `europa-button--${variant}-${state}`
      ].join(' ')}
      {...props}
    >
      {state === 'loading' ? (
        <Lottie 
          options={{
            loop: true,
            autoplay: true,
            animationData: require('../../lotties/activity-indicator.json'),
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          className="loader-animation"
          height={14}
          width={16}
        />
      ): label}
    </button>
  );
};
