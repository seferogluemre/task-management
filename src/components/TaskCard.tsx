import { Draggable } from "@hello-pangea/dnd";
import { Task } from "../types/Task";
import { Card } from "react-bootstrap";

interface TaskCardProps {
    task: Task;
    index: number;
}

const TaskCard = ({ task, index }: TaskCardProps) => {

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                        ...provided.draggableProps.style,
                        boxShadow: snapshot.isDragging ? "0 0 0.5em #666" : "none"
                    }}
                >
                    <Card.Body>
                        <Card.Title>{task.title}</Card.Title>
                        <Card.Text>{task.description}</Card.Text>
                        <Card.Subtitle className="text-muted">Atanan {task.assignee}</Card.Subtitle>
                    </Card.Body>

                </Card>
            )}
        </Draggable>
    )

}

export default TaskCard;