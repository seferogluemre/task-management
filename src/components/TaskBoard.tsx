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
        const { destination, source, draggableId } = result;
        if (!destination) return;

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const draggedTask = tasks.find((task) => task.id === draggableId);

        const updatedTask: Task = {
            ...draggedTask,
            status: destination.droppableId as Task["status"],
        }

        const newTasks = tasks.filter((task) => task.id !== draggableId)

        const destinationTasks = newTasks.filter((task) => task.status === destination.droppableId)

        // 0.indeksi temsil eder yani sürükledigimiz taskin arrayin konumunu temsil eder
        let insertAt = 0;
        if (destination.index === 0) {
            // Hedef konumda bulunan aynı status degerine sahip ilk elemanı buluyor
            const firstTaskInDestination = newTasks.find((task) => task.status === destination.droppableId)
            if (firstTaskInDestination) {
                // Bulunan elemanın indeksini bulma
                insertAt = newTasks.indexOf(firstTaskInDestination);
            } else {
                insertAt = newTasks.length;
            }
        } else {
            const prevTaskInDestination = destinationTasks[destination.index];
            if (prevTaskInDestination) {
                insertAt = newTasks.indexOf(prevTaskInDestination) + 1;

            } else {
                insertAt = newTasks.length;
            }
        }

        newTasks.splice(insertAt, 0, updatedTask)
        setTasks(newTasks)

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