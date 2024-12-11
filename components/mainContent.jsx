import { tasks } from '../moduls/tasksDB'
import { getStatusTaskColor } from '../utils/getStatusTaskColor'

const inProgressTask = tasks.filter((ele) => ele.state === "in_progress" || ele.state === "backlog");
const completedTask = tasks.filter((ele) => ele.state === "completed");

export function mainContent(string) {
    switch (string) {
        case "progress":
            return (
                <div className='p-3'>
                    <h3 className='pb-2 fw-bolder'>Current Tasks ({inProgressTask.length})</h3>
                    <ul>
                        {inProgressTask.map((task) => (
                            <li key={task.id}>
                                <h5 className='fw-bolder py-1'>
                                    {task.title} <span className={`status ${getStatusTaskColor(task.state)}`}> {task.state}</span>
                                </h5>
                                <p>Priority: {task.priority}</p>
                                <p>Est. time: {task.estimatedTime} mins</p>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        case "completed":
            return (
                <div className='p-3'>
                    <h3 className=' pb-2 fw-bolder'>Completed Tasks ({completedTask.length})</h3>
                    <ul>
                        {completedTask.map((task) =>
                            <li key={task.id}>
                                <h5 className=' fw-bolder py-1'>{task.title} <span className={`status ${getStatusTaskColor(task.state)}`}> {task.state} </span></h5>
                                <p>Priority: {task.priority} </p>
                                <p>Est. time: {task.estimatedTime} </p>
                            </li>
                        )}
                    </ul>
                </div>
            )
    }

}
