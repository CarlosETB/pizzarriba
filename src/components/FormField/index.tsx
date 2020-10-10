import React from "react";

// Private
import { FormFieldWrapper, LabelText, Input, Label } from "./styles";

interface LayoutProps {
  value?: any;
  name?: string;
  label?: string;
  onChange?: any;
  suggestions?: any[];
}

const FormField: React.FC<LayoutProps> = (props) => {
  const { name, label, suggestions, onChange, value } = props;

  const id = `id_${name}`;

  const settings = {
    id,
    name,
    onChange,
    value: value || "",
    autoComplete: "off",
    list: `suggestionFor_${id}`,
  };

  return (
    <FormFieldWrapper>
      <Label htmlFor={id}>
        <Input {...settings} />

        <LabelText>{`${label} :`}</LabelText>

        <datalist id={`suggestionFor_${id}`}>
          {suggestions?.map((suggestion) => (
            <option
              value={suggestion}
              key={`suggestionFor_${id}_option_${suggestion}`}
            >
              {suggestion}
            </option>
          ))}
        </datalist>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
