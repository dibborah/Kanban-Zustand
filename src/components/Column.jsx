import { useStore } from '../store';
import './Column.css';
import Task from './Task';

// eslint-disable-next-line react/prop-types
const Column = ({ state }) => {
    const tasks = useStore(
        (store) => store.tasks.filter(task => task.state === state)
    );
    return (
        <div className="column">
            <p>{state}</p>
            {tasks.map((task) => {
                return <Task title={task.title} key={Math.random()} />// generating new keys on the fly should be strictly avoided // I am doinng this since this will map a very small array
            })}
        </div>
    )
}

export default Column;

// const filtered = useMemo(() => tasks.filter(task => task.state === state), [tasks, state]);
