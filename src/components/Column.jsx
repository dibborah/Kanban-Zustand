import { useState } from 'react';
import { useStore } from '../store';
import './Column.css';
import Task from './Task';

// eslint-disable-next-line react/prop-types
const Column = ({ state }) => {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);

    const tasks = useStore(
        (store) => store.tasks.filter(task => task.state === state)
    );
    const addTasks = useStore((store) => store.addTasks);
    return (
        <div className="column">
            <div className="titleWrapper">
                <p>{state}</p>
                <button onClick={() => {
                    setOpen(true);
                }}>Add</button>
            </div>
            <p>{state}</p>
            {tasks.map((task) => {
                return <Task title={task.title} key={Math.random()} />// generating new keys on the fly should be strictly avoided // I am doinng this since this will map a very small array
            })}
            {open && (
                <div className='Modal'>
                    <div className='modalContent'>
                        <input onChange={e => setText(e.target.value)} value={text} />
                        <button onClick={() => {
                            addTasks(text, state);
                            setText('');
                            setOpen(false)
                        }}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Column;

// const filtered = useMemo(() => tasks.filter(task => task.state === state), [tasks, state]);
