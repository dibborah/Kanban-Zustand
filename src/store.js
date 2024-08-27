import { create } from "zustand";

const store = (set) => ({ // set is a state setter for the whole store
    tasks: [{ title: 'TestTask', state: 'PLANNED' }],
    draggedTask: null,
    addTasks: (title, state) => set((store) => ({ tasks: [...store.tasks, { title, state }] })),

    // deleteTasks: (title) => set((store) => store.tasks.filter((tasks) => tasks.title === title))

    deleteTasks: (title) => set((store) => ({ tasks: store.tasks.filter((task) => task.title !== title) })),
    setDraggedTask: (title) => set({ draggedTask: title }),
    moveTask: (title, state) => set(store => ({
        tasks: store.tasks.map((task) => (task.title === title  ? {title, state} : task)),
    })),
});

export const useStore = create(store);