import React from "react";
import { useForm } from "react-hook-form";

const Help = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const inputFields = [
    {
      id: 1,
      htmlFor: "Name",
      label: "Name",
      type: "text",
      placeholder: "Name",
      registerData: "name",
    },
    {
      id: 2,
      htmlFor: "Target-field",
      label: "Target Field",
      type: "url",
      placeholder: "Website Link",
      registerData: "targetField",
    },
    {
      id: 3,
      htmlFor: "Job-title",
      label: "Job Title",
      type: "text",
      placeholder: "Title",
      registerData: "jobTitle",
      styles:"grid col-span-2"
    },
    {
      id: 4,
      htmlFor: "Job-category",
      label: "Job Category",
      dropdownOption: [
        "Technology",
        "Accounting",
        "Architecture",
        "Customer Service",
        "Healthcare",
        "Human Resources",
        "Legal",
        "Sales",
      ],
      registerData: "jobCategory",
    },
    {
      id: 5,
      htmlFor: "Job-type",
      label: "Job Type",
      dropdownOption: ["Full Time", "Internship"],
      registerData: "jobType",
    },
    {
      id: 6,
      htmlFor: "Job-location",
      label: "Job Location",
      type: "text",
      placeholder: "Location",
      registerData: "jobLocation",
    },
    {
      id: 7,
      htmlFor: "Salary-range",
      label: "Salary Range",
      type: "text",
      placeholder: "Salary Range",
      registerData: "salaryRange",
    },
    {
      id: 8,
      htmlFor: "Experience",
      label: "Experience",
      type: "text",
      placeholder: "Experience",
      registerData: "experience",
    },
    {
      id: 9,
      htmlFor: "Qualification",
      label: "Qualification",
      type: "text",
      placeholder: "Qualification",
      registerData: "qualification",
    },
  ];

  return (
    <div className="w-full h-screen bg-[#f3f3fb] flex flex-col">
      <div className="w-full bg-white text-center py-3">
        <p className="font-bold text-blue-400 text-2xl">Help</p>
      </div>
      <div className="w-full bg-[#f3f3fb] text-center py-3">
        <p className="font-bold text-black text-lg">Raise Support</p>
      </div>
      <div className="bg-white p-3  ">
        <div className="p-4 border border-gray-300  rounded-md ">
          <form
            className="sm:grid sm:grid-cols-2 sm:gap-4"
            onSubmit={handleSubmit((data, e) => {
              console.log(data);
            })}
          >
            {inputFields.map(
              ({
                id,
                htmlFor,
                label,
                type,
                placeholder,
                registerData,
                dropdownOption,
                styles
              }) => (
                <div key={id} className={`flex flex-col ${styles} mb-4 sm:mb-0`}>
                  <label htmlFor={htmlFor} className="font-medium mb-2">{label}</label>
                  {type && (
                    <input
                    className="border py-2 px-3 outline-0 rounded-md "
                      id={htmlFor}
                      type={type}
                      placeholder={placeholder}
                      {...register(registerData)}
                    />
                  )}
                  {dropdownOption && (
                    <select className="border py-2 px-2 outline-0 rounded-md" {...register(registerData)}>
                      {dropdownOption.map((item, index) => (
                        <option key={index} value={item} >
                          {item}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              )
            )}

           <div className="flex items-center sm:justify-end justify-center sm:translate-x-14">
           <button
              type="submit"
              className=" bg-blue-700 py-2 rounded-md hover:bg-blue-600 duration-300 grid col-span-2 w-24"
            >
              <span className="ml-2 text-white font-medium">Submit</span>
            </button>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
