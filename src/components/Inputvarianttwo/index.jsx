import React from "react";
import { emailRegex, passwordRegex, phoneRegex } from "../../libs/regex";

const InputVarTwo = ({
  label,
  type,
  placeholder,
  register,
  name,
  errors,
  required
}) => {
  return (
    <>
      <label htmlFor="">{label}</label> <br />
      {
        type === "email" ?
          <input
            {...register(name, { required: required, pattern: emailRegex })}
            type={type}
            placeholder={placeholder}
            className={`border ${errors[name] ? "border-red-500" : "border-gray-500"} w-full p-3 outline-none  rounded-lg mt-2`}
          /> :
          type === "password" ?
            <input
              {...register(name, {
                required: required,
                pattern: {
                  value: passwordRegex,
                  message: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
                }
              })}
              type={type}
              placeholder={placeholder}
              className={`border ${errors[name] ? "border-red-500" : "border-gray-500"} w-full p-3 outline-none  rounded-lg mt-2`}
            />
            :
            type === "number" ?
              <input
                {...register(name, {
                  required: required,
                  pattern: {
                    value: phoneRegex,
                    message: "Invalid phone number"
                  }
                })}
                type={type}
                placeholder={placeholder}
                className={`border ${errors[name] ? "border-red-500" : "border-gray-500"} w-full p-3 outline-none  rounded-lg mt-2`}
              />
              :
              <input
                {...register(name, { required: required })}
                type={type}
                placeholder={placeholder}
                className={`border ${errors[name] ? "border-red-500" : "border-gray-500"} w-full p-3 outline-none  rounded-lg mt-2`}
              />
      }

      {errors[name] && (
        <span className="text-red-800">{errors[name].message}</span>
      )}
    </>
  );
};

export default InputVarTwo;
