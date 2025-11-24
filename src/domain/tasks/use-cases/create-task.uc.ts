import { Task } from '../entities/task.entity';
import { TaskTitle } from '../entities/value-objects/task-title.vt';
import { TaskRepository } from '../repositories/task.repository';

export class CreateTaskUseCase {
  constructor(private readonly repo: TaskRepository) {

  }

  async execute(input: { title: string }) {
    const task = Task.create(
      new TaskTitle(input.title),
    )
    await this.repo.save(task)
    return task;
  }
}
