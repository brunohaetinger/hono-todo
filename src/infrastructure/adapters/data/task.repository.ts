import { Task } from "../../../domain/tasks/entities/task.entity";
import { TaskId } from "../../../domain/tasks/entities/value-objects/task-id.vt";
import { TaskRepository } from "../../../domain/tasks/repositories/task.repository";

export class TaskRepositoryImpl implements TaskRepository {
  save(task: Task): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: TaskId): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(task: Task): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findById(id: TaskId): Promise<Task | null> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<Task[]> {
    return [];
  }
}
