import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import Button from "./Button";

const RegisterForm = ({ handleRegister, loading, error, response }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleRegister();
  };

  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="flex h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 max-w-lg h-fit m-auto bg-amber-200 p-2 rounded-sm"
      >
        <h1 className="mx-auto">Register</h1>
        {/* register your input into the hook by invoking the "register" function */}

        <input
          placeholder="Full Name"
          className="border rounded-sm py-2 px-4"
          defaultValue=""
          {...register("name", { required: true })}
        />

        <input
          placeholder="987654321"
          className="border rounded-sm py-2 px-4"
          defaultValue=""
          {...register("phone", { required: true })}
        />

        <input
          placeholder="example@email.com"
          className="border rounded-sm py-2 px-4"
          defaultValue=""
          {...register("email", { required: true })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="password"
          placeholder="Password"
          className="border rounded-sm py-2 px-4"
          {...register("password", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        {/* <input type="submit" /> */}
        <Button disabled={loading} type="submit">
          REGISTER
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
