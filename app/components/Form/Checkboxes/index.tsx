import type {FC, ReactNode} from 'react';
import Checkbox from '../Checkbox';
import CheckboxRadioGroup from '../CheckboxRadioGroup';
import Field from '../Field';

type CheckboxOption = {
  disabled?: boolean;
  error?: boolean;
  label: ReactNode;
  name: string;
  required?: boolean | string;
};

export type CheckboxesProps = {
  className?: string;
  classNameGroup?: string;
  description?: ReactNode;
  disabled?: boolean;
  error?: ReactNode;
  isHorizontal?: boolean;
  label?: ReactNode;
  options: CheckboxOption[];
  required?: boolean;
};

const Checkboxes: FC<CheckboxesProps> = ({
  className,
  classNameGroup,
  description,
  disabled,
  error,
  isHorizontal,
  label,
  options,
  required,
  ...rest
}) => {
  const isDisabled = disabled || options.every((option) => option.disabled);
  const isRequired = options.every((option) => option.required);

  return (
    <Field
      className={className}
      description={description}
      disabled={isDisabled}
      error={error}
      label={label}
      required={isRequired}
      type="radio"
    >
      <CheckboxRadioGroup
        className={classNameGroup}
        isHorizontal={isHorizontal}
      >
        {options.map((option) => (
          <Checkbox
            key={option.name}
            disabled={isDisabled || option.disabled}
            error={error}
            label={option.label}
            name={option.name}
            required={!!(option.required && error && option.error)}
            {...rest}
          />
        ))}
      </CheckboxRadioGroup>
    </Field>
  );
};

export default Checkboxes;
