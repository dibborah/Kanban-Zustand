import { create } from "zustand";

const store = (set) => ({ // set is a state setter for the whole store
    tasks: [{title: 'TestTask', state: 'PLANNED'}],
    addTasks: (title, state) => set((store) => ({tasks: [...store.tasks, {title, state}]})),

    // deleteTasks: (title) => set((store) => store.tasks.filter((tasks) => tasks.title === title))
    
    deleteTasks: (title) => set((store) => ({tasks: store.tasks.filter((task) => task.title !== title)})),
});

export const useStore = create(store);