import { eq } from "drizzle-orm";
import { Task } from "../../../domain/tasks/entities/task.entity";
import { TaskId } from "../../../domain/tasks/entities/value-objects/task-id.vt";
import { TaskTitle } from "../../../domain/tasks/entities/value-objects/task-title.vt";
import { TaskRepository } from "../../../domain/tasks/repositories/task.repository";
import { db } from "../../db";
import { tasks } from "./sqlite/schema";

export class TaskRepositoryImpl implements TaskRepository {
  async save(task: Task): Promise<void> {
    await db.insert(tasks).values({
      id: task.id.toString(),
      title: task.title.value,
      completed: task.completed,
      createdAt: new Date().getTime(),
    });
  }
  delete(id: TaskId): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(task: Task): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findById(id: TaskId): Promise<Task | null> {
    const row = await db.query.tasks.findFirst({ with: { id: id.value } })
    if (!row) return null;
    return new Task(
      row.id,
      new TaskTitle(row.title),
      Boolean(row.completed)
    )
  }

  async findAll(): Promise<Task[]> {
    const rows = await db.select().from(tasks);

    return rows.map(
      row =>
        new Task(
          new TaskId(row.id),
          new TaskTitle(row.title),
          Boolean(row.completed)
        )
    );
  }
}
