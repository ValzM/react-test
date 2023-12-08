import { useEffect } from "react";
import {Task} from "../../interfaces/AppInterface";

interface Props {
    task: Task;
    completeTask: () => void;
    removeTask: () => void;
}
export default function TaskCard({ task, completeTask, removeTask }: Props) {

    return (
        <li className={`task-card ${task.statut ? 'completed' : ''} `} key={task.id as unknown as null}>
            <div>
                <label>
                    <input type="checkbox" onChange={completeTask} checked={task.statut as boolean} />
                    <span className="checkbox"></span>
                    <span className="task-content">{task.content}</span>
                    
                </label>
            </div>

            <span className="delete-button" onClick={removeTask}>supprimer</span>
        </li>
    )
}