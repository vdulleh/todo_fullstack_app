import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup
    .object({
        task: yup.string().required("Task is required")
            .min(3, "Task must be at least 3 characters")
    })
    .required()

export default function EditToDoForm({ handleUpdateTask, task }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            task: task.task // This will set the default value of the input field to the current task's value, allowing the user to see and edit the existing task when they open the edit form.
        }
    });

    const onSubmit = (data) => {
        handleUpdateTask({
            id: task.id,
            task: data.task,
            isEditing: false
        }); // This will call the handleUpdateTask function passed down from the App component, passing the task's ID, the updated task text, and setting isEditing to false to exit edit mode after updating.
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>  {/* This is the form element that will handle the submission of the updated task. The handleSubmit function from react-hook-form will take care of preventing the default form submission behavior and will call the onSubmit function with the form data when the form is submitted. */}
            <input type="text" placeholder="Enter a task" {...register("task")} />
            {errors.task && <span>{errors.task.message}</span>}
            <button type="submit">Update Task</button>
        </form>
    )
}
