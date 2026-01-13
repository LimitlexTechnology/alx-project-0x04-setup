import React from 'react'

interface ButtonProps {
  buttonLabel: string
  buttonBackgroundColor?: string
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor = 'gray' }) => {
  const bgClass = `bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 text-white font-semibold py-2 px-4 rounded`;

  return (
    <button className={bgClass} style={{ minWidth: 80 }}>
      {buttonLabel}
    </button>
  )
}

export default Button
