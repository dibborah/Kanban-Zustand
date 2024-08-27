import classNames from 'classnames';
import './Task.css';
import { useStore } from '../store';

// eslint-disable-next-line react/prop-types
const Task = ({ title }) => {
    const task = useStore((store) => store.tasks.find((task) => task.title == title));
    const deleteTasks = useStore((store) => store.deleteTasks);

    return (
        <div className="task" draggable>
            <div>{task.title}</div>
            <div className='bottomWrapper'>
                <div>
                    <button onClick={() => deleteTasks(task.title)}>Del</button>
                </div>
                <div className={classNames('status', task.state)}>{task.state}</div>
            </div>
        </div>
    )
}

export default Task;
