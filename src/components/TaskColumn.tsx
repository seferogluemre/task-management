import { Col } from "react-bootstrap";
import { Task } from "../types/Task";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

interface TaskColumnProps {
    status: string;
    tasks: Task[];
}

const TaskColumn = ({ status, tasks }: TaskColumnProps) => {

    return (
        <Col>
            <h3 className="text-center">{status}</h3>
            <Droppable droppableId={status} >
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} style={{
                        minHeight: "500px",
                        padding: "10px",
                        background: snapshot.isDraggingOver ? "#e9ecef" : "#c6c9cc"
                    }} >
                        {
                            tasks.map((task, index) => (
                                <TaskCard key={task.id} task={task} index={index} />
                            ))
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Col>
    )
}

export default TaskColumn;