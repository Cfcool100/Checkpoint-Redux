import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks:[
            {id : 1, description: 'i have to catch up ', isDone: false},
            {id : 2, description: `Eat, Don't sleep, Hack, 🔁`, isDone: false},
            {id : 3, description: 'My Code Works 🤩🥳', isDone: true}
        ],
        filter: 'all'
    }
        ,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id : Date.now(),
                isDone : false,
                description : action.payload,
            }
            state.tasks.push(newTask);
        },
        toggleTask: (state, action) => {
            const taskId = action.payload;
            const task = state.tasks.find((t) => t.id === taskId);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        editTask: (state, action) => {
            const {taskId, description: taskDescription} = action.payload;
            const taskInput = state.tasks.find((t) => t.id === taskId);
            if (taskInput) {
                taskInput.description = taskDescription;
            }
        },
        removeTask: (state, action) => {
            const taskId = action.payload;
            const taskIndex = state.tasks.findIndex((t) => t.id === taskId);
            if (taskIndex !== -1) {
                state.tasks.splice(taskIndex, 1);
            }
        },
        filterDone: (state, action) => {
            state.filter = 'done';
        },
        filterUndone: (state, action) => {
            state.filter = 'undone';
        },
        filterAll: (state, action) => {
            state.filter = 'all';
        },
    }
})

export const {addTask, toggleTask, editTask, removeTask, filterDone, filterUndone, filterAll} = todoSlice.actions

export const todoReducer = todoSlice.reducer;