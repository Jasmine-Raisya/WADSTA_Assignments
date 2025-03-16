import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Todo } from "./ToDo.jsx";
import { ToDoForm } from "./ToDoForm.jsx";
import { EditTodoForm } from "./EditTodoForm.jsx";
// ✅ Firestore Imports
import { db, auth } from "../firebase"; 
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, addDoc, updateDoc, deleteDoc, onSnapshot, query, where, getDocs } from "firebase/firestore";

export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // ✅ Redirect to login if user is not authenticated
    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);

    // ✅ Load tasks from Firestore for the logged-in user only
    useEffect(() => {
        if (!user) return; // Prevent fetching if no user

        console.log(`Fetching tasks for user: ${user.uid}`); // ✅ Debugging Log

        const q = query(collection(db, "tasks"), where("userId", "==", user.uid)); // ✅ Fetch only the current user's tasks

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tasks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log("Fetched tasks:", tasks); // ✅ Debugging Log
            setToDos(tasks);
        });

        return () => unsubscribe(); // ✅ Cleanup Firestore listener to prevent duplicates
    }, [user]); // ✅ Depend only on `user`, preventing re-renders

    // ✅ Add a new task & save to Firestore with userId
    const addToDo = async (toDo) => {
        if (!user) {
            console.error("User is not logged in. Cannot add task.");
            return;
        }
        if (!toDo.trim()) {
            console.warn("Empty task. Skipping...");
            return;
        }

        try {
            // ✅ Check Firestore for duplicate task **with the same userId**
            const q = query(collection(db, "tasks"), where("task", "==", toDo), where("userId", "==", user.uid));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                console.warn("Duplicate task detected! Skipping...");
                return; // ✅ Prevent duplicate tasks
            }

            // ✅ Add the task WITH the userId
            await addDoc(collection(db, "tasks"), {
                task: toDo,
                completed: false,
                isEditing: false,
                userId: user.uid, // ✅ Now it properly links the task to the logged-in user
                createdAt: new Date()
            });

            console.log("Task successfully added!");
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    // ✅ Toggle task completion status & update Firestore
    const toggleComplete = async (id, completed) => {
        try {
            const taskRef = doc(db, "tasks", id);
            await updateDoc(taskRef, { completed: !completed });

            setToDos(toDos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ));
        } catch (error) {
            console.error("Error updating completion status:", error);
        }
    };

    // ✅ Delete a task from Firestore
    const deleteToDo = async (id) => {
        try {
            await deleteDoc(doc(db, "tasks", id));
            setToDos(toDos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    // ✅ Enter edit mode
    const editToDo = (id) => {
        setToDos(toDos.map(todo =>
            todo.id === id ? { ...todo, isEditing: true } : todo
        ));
    };

    // ✅ Edit task & update Firestore
    const editTask = async (id, newTask) => {
        try {
            const taskRef = doc(db, "tasks", id);
            await updateDoc(taskRef, { task: newTask });

            setToDos(toDos.map(todo =>
                todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
            ));
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    // ✅ Toggle filter for completed tasks
    const toggleCompletedFilter = () => {
        setShowCompleted(!showCompleted);
    };

    // ✅ Filter tasks based on completion status
    const filteredTasks = showCompleted
        ? toDos.filter(todo => todo.completed)
        : toDos;

    return (
        <div className="TodoWrapper bg-gray-900 min-h-screen text-white flex flex-col items-center p-4">
            {/* ✅ Page Header */}
            <h1 className="text-4xl font-bold text-center bg-[#121212] py-4 shadow-md w-full">
                To-Do List
            </h1>

            {/* ✅ Toggle Show Completed Button */}
            <button 
                onClick={toggleCompletedFilter} 
                className="mt-4 bg-blue-500 px-4 py-2 rounded-md"
            >
                {showCompleted ? "Show All Tasks" : "Show Completed Tasks"}
            </button>

            {/* ✅ Task Input Form */}
            <ToDoForm addToDo={addToDo} />

            {/* ✅ Task List */}
            <div className="w-full max-w-md mt-4 space-y-2">
                {filteredTasks.map((todo) =>
                    todo.isEditing ? (
                        <EditTodoForm key={todo.id} editToDo={editTask} task={todo} />
                    ) : (
                        <Todo
                            key={todo.id}
                            task={todo}
                            toggleComplete={() => toggleComplete(todo.id, todo.completed)}
                            deleteToDo={deleteToDo}
                            editToDo={editToDo}
                        />
                    )
                )}
            </div>
        </div>
    );
};
