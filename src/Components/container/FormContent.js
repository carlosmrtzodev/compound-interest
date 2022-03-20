import * as Yup from "yup";
import { useState } from "react";
import Input from "../elements/Input";
import { Formik, Form } from "formik";
import { Balance, Button, Icons, Total } from "../../styles/elements";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }

  return Math.round(total);
};

const formatter = new Intl.NumberFormat("en-US", {
  styled: "currency",
  currency: "USD",
  minimunFractionDigits: 2,
  maximunFractionDigits: 2,
});

function FormContent() {
  const [balance, setBalance] = useState("");

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );

    setBalance(formatter.format(val));
  };

  return (
    <>
      <Formik
        initialValues={{
          deposit: "",
          contribution: "",
          years: "",
          rate: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          deposit: Yup.number()
            .required("Required")
            .typeError("Must be a number"),
          contribution: Yup.number()
            .required("Required")
            .typeError("Must be a number"),
          years: Yup.number()
            .required("Required")
            .typeError("Must be a number"),
          rate: Yup.number()
            .required("Required")
            .typeError("Must be a number")
            .min(0, "The minimum value is 0")
            .max(1, "The minimum value is 1"),
        })}
      >
        <Form>
          <Input name="deposit" label="Initial Deposit" />
          <Input name="contribution" label="Annual Contribution" />
          <Input name="years" label="Years" />
          <Input name="rate" label="Estimated Interest" />

          <Button type="submit">
            <Icons>
              <FontAwesomeIcon icon={faCalculator} />
            </Icons>
            Calculate
          </Button>
        </Form>
      </Formik>

      {balance !== "" ? (
        <Balance>
          Ending Balance: <Total>$ {balance}</Total>
        </Balance>
      ) : null}
    </>
  );
}
export default FormContent;
