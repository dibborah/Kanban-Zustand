import { create } from "zustand";

const store = (set) => ({ // set is a state setter for the whole store
    tasks: [{title: 'TestTask', state: 'PLANNED'}]
});

export const useStore = create(store);