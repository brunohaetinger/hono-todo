import { TaskRepository } from "../../../domain/tasks/repositories/task.repository";
import { db } from '../../db';
import { tasks } from '../../adapters/data/sqlite/schema'
import { TaskId } from "../../../domain/tasks/entities/value-objects/task-id.vt";
import { TaskTitle } from "../../../domain/tasks/entities/value-objects/task-title.vt";
import { Task } from "../../../domain/tasks/entities/task.entity";

export class TaskRepositoryImpl implements TaskRepository {
  async save(task: Task): Promise<void> {
    const row = await db.insert(tasks).values({
      id: task.id.value,
      title: task.title.value,
      createdAt: new Date().getTime(),
      // createdAt: task.createdAt.getTime(),
    }).returning();
    return;
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
    const rows = await db.select().from(tasks);
    return rows.map((r) => new Task(
      new TaskId(r.id),
      new TaskTitle(r.title),
      Boolean(r.completed)
    ))
  }
}
