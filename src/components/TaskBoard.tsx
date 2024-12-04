import { Container, Row } from "react-bootstrap";
import { Task } from "../types/Task";
import React from 'react'
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import TaskColumn from "./TaskColumn";

interface TaskBoardProps {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}


const TaskBoard = ({ tasks, setTasks }: TaskBoardProps) => {

    const statuses: Task["status"][] = ["Todo", "In Progress", "Done"];
    const onDragEnd = (result: DropResult) => {


    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <Row>
                    {
                        statuses.map((status) => (
                            <TaskColumn
                                key={status}
                                status={status}
                                tasks={tasks.filter((task) => task.status == status)}
                            />
                        ))
                    }
                </Row>
            </Container>
        </DragDropContext>
    )
}

export default TaskBoard;