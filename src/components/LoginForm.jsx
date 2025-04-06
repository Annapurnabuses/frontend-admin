import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ handleLogin, loading, error, response }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleLogin();
  };

  return (
    <div className="flex h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 max-w-lg h-fit m-auto bg-amber-200 p-2 py-6 rounded-sm"
      >
        <h1 className="mx-auto">LOGIN</h1>
        {/* register your input into the hook by invoking the "register" function */}

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
          LOGIN
        </Button>
        <p
          onClick={() => navigate("/reset-password")}
          className="cursor-pointer underline text-indigo-700"
        >
          Forgot Password?
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
