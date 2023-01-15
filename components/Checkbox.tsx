import { useState } from "react";

interface CheckboxProps {
  [key: string]: any;
  checked?: boolean;
}

export const Checkbox = (props: CheckboxProps) => {
  const {checked: checkboxChecked} = props;

  const [checked, setChecked] = useState(checkboxChecked ?? false);

  return (
    <>
      <input type="checkbox" {...props} onChange={() => setChecked(!checked)} checked={checked} />
    </>
  )
}