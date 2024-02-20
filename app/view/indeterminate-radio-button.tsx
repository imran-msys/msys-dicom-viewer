import { Input } from "@/components/ui/input";
import { HTMLProps, useEffect, useRef, useState } from "react";

interface IndeterminateRadioProps {
  indeterminate?: boolean;
  className?: string;
  checked?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const IndeterminateRadioButton = ({
  indeterminate,
  className = "",
  value,
  ...rest
}: IndeterminateRadioProps) => {
  const inputRef = useRef<HTMLInputElement>(null!);

  // For handling the sub row presented in the table
  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      inputRef.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [inputRef, indeterminate, rest.checked]);

  // console.log(indeterminate, rest, rest.checked, inputRef.current?.indeterminate);

  return (
    <Input
      name="select-patient"
      value={value}
      type="radio"
      ref={inputRef}
      className={className}
      {...rest}
    />
  );
};

export default IndeterminateRadioButton;
