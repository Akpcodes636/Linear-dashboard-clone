import * as Yup from 'yup';

 export const validationSchema = Yup.object({
  Title: Yup.string()
    .min(3, 'Title must be at least 3 characters')
    .required('Title is required'),

  Project: Yup.string()
    .min(3, 'Project must be at least 3 characters')
    .required('Project is required'),

  TotalSubtasks: Yup.number()
    .min(1, 'Must have at least 1 subtask')
    .required('Total subtasks required'),

  CompletedSubtasks: Yup.number()
    .min(0, 'Must be at least 0')
    .max(Yup.ref('TotalSubtasks'), 'Completed cannot exceed total subtasks')
    .required('Completed subtasks required'),

  Date: Yup.string()
    .required('Date is required'),

  Comments: Yup.string()
    .max(500, 'Comments can be at most 500 characters'),

  Status: Yup.mixed<"To Do" | "In Progress" | "Done">()
    .oneOf(["To Do", "In Progress", "Done"], 'Invalid status')
    .required('Status is required'),
});
