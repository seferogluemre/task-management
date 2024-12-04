import { Task } from "../types/Task";

interface TaskColumnProps {
    status: string;
    task: Task;
}

const TaskColumn = ({ status, tasks }: TaskColumnProps) => {

    return (
        <div>
            taskcolumn
        </div>
    )

}

export default TaskColumn;