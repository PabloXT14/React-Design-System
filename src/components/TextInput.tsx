import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

// USANDO PATTERN DE COMPOSIÇÃO DE COMPONENTE ROOT EXTERNO
export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300"
    >
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'// Forçando nome no Componente devido ao Slot

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {} 

function TextInputInput({ ...rest }: TextInputInputProps) {
  return (
      <input
        className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
        {...rest}
      />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}