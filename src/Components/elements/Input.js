import {
  Control,
  Label,
  Inputs,
  ErrorMessage,
  IconsColor,
} from "../../styles/elements";
import { useField } from "formik";
import { faListNumeric } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Control>
      <Label>
        {label}
        <IconsColor>
          <FontAwesomeIcon icon={faListNumeric} />
        </IconsColor>
      </Label>

      <Inputs {...field} {...props} />

      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </Control>
  );
};
export default Input;
