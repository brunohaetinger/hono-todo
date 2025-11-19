export interface TaskRepository {
  save(task: Task): Promise<void>;
  delete(id: TaskId): Promise<void>;
  update(task: Task): Promise<void>;
  findAll(): Promise<Task[]>;
  findById(id: TaskId): Promise<Task | null>;
}
