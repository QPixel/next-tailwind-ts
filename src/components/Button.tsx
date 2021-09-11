/* Example with @emotion/styled */
import React, { ReactElement } from 'react';
import tw, { styled, theme, css } from 'twin.macro'

type buttonVariants = 'primary' | 'secondary';

interface ButtonProps {
  variant?: buttonVariants;
  isSmall?: boolean;
}

const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  // The common button styles added with the tw import
  tw`px-8 py-2 rounded focus:outline-none transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-yellow-400)`,

  // Use props to conditionally style your components
  variant === 'primary' && tw`bg-black text-white border-black`,

  // Combine regular css with tailwind classes within backticks
  variant === 'secondary' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-yellow-600`,
  ],

  // Conditional props can be used
  isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `,
])

const IconWrapper = styled.span(tw`
  absolute left-0 inset-y-0
  flex items-center
  pl-3
`)

const Icon = styled.svg(tw`
  h-5 w-5
  text-blue-500
  group-hover:text-blue-400
  transition ease-in-out duration-150
`)

interface ButtonStyled {
  variant?: buttonVariants;
  isSmall?: boolean;
  children: string | ReactElement;
}

const ButtonStyled: React.FC<ButtonStyled> = ({ children, variant = "primary", isSmall }) => (
  <Button variant={variant} isSmall>
    <IconWrapper>
      <Icon fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </Icon>
    </IconWrapper>
    {children}
  </Button>
)

export default ButtonStyled
