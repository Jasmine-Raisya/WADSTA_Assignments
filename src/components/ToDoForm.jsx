import { useState } from "react";

export const ToDoForm = ({ addToDo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") return; // Prevent empty tasks

        addToDo(value); // ✅ Only call `addToDo()` (which saves to Firestore)
        setValue(""); // ✅ Clear input after adding
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 my-4">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter a task..."
                className="border p-2 rounded-md w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add
            </button>
        </form>
    );
};
