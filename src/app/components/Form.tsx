"use client";
import { useFormik } from "formik";
import { SendFormData } from "../types";
import { toast } from "sonner";
import {validationSchema}  from "../lib/validations/form";
import Spinner from "./ui/Spinner";

const Form = () => {

  const formik = useFormik<SendFormData>({
    initialValues: {
      Title: "",
      Project: "",
      TotalSubtasks: 0,
      CompletedSubtasks: 0,
      Date: "",
      Comments: "",
      Status: "To Do",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await fetch("/api/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          toast.success("Task created successfully!");
          resetForm();
        } else {
          toast.error("Failed to create task");
        }
      } catch (error) {
        toast.error("Something went wrong");
        console.error("Submit failed", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <input
        name="Title"
        type="text"
        placeholder="Task Title"
        value={formik.values.Title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border p-3 rounded-md dark:bg-[#2c2f36] dark:text-white"
      />
      {formik.touched.Title && formik.errors.Title && (
        <p className="text-red-500 text-sm">{formik.errors.Title}</p>
      )}

      <input
        name="Project"
        type="text"
        placeholder="Project Name"
        value={formik.values.Project}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border p-3 rounded-md dark:bg-[#2c2f36] dark:text-white"
      />
      {formik.touched.Project && formik.errors.Project && (
        <p className="text-red-500 text-sm">{formik.errors.Project}</p>
      )}

      <div className="flex gap-4">
        <input
          name="TotalSubtasks"
          type="number"
          placeholder="Total Subtasks"
          value={formik.values.TotalSubtasks}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-1/2 border p-3 rounded-md dark:bg-[#2c2f36] dark:text-white"
        />
        <input
          name="CompletedSubtasks"
          type="number"
          placeholder="Completed Subtasks"
          value={formik.values.CompletedSubtasks}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-1/2 border p-3 rounded-md dark:bg-[#2c2f36] dark:text-white"
        />
      </div>
      {(formik.touched.TotalSubtasks && formik.errors.TotalSubtasks) ||
      (formik.touched.CompletedSubtasks && formik.errors.CompletedSubtasks) ? (
        <p className="text-red-500 text-sm">
          {formik.errors.TotalSubtasks || formik.errors.CompletedSubtasks}
        </p>
      ) : null}

      <input
        name="Date"
        type="date"
        value={formik.values.Date}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border p-3 rounded-md dark:bg-[#2c2f36] dark:text-white"
      />
      {formik.touched.Date && formik.errors.Date && (
        <p className="text-red-500 text-sm">{formik.errors.Date}</p>
      )}

      <textarea
        name="Comments"
        placeholder="Comments (optional)"
        value={formik.values.Comments}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border p-3 rounded-md dark:bg-[#2c2f36] dark:text-white"
      />
      {formik.touched.Comments && formik.errors.Comments && (
        <p className="text-red-500 text-sm">{formik.errors.Comments}</p>
      )}

      <select
        name="Status"
        value={formik.values.Status}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border p-3 rounded-md dark:bg-[#2c2f36] dark:text-white"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      {formik.touched.Status && formik.errors.Status && (
        <p className="text-red-500 text-sm">{formik.errors.Status}</p>
      )}

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="bg-[#1C1D22] text-white px-4 py-2 rounded hover:bg-[#333]"
      >
        {formik.isSubmitting ? <Spinner /> : "Create Task"}
      </button>
    </form>
  );
};

export default Form;
