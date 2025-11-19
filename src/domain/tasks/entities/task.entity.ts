import { TaskId } from "./value-objects/task-id.vt";
import { TaskTitle } from "./value-objects/task-title.vt";

export class Task {
  constructor(
    public readonly id: TaskId,
    public title: TaskTitle,
    public completed: boolean = false,
  ) { }

  complete(): void {
    this.completed = true;
  }

  rename(newTitle: TaskTitle): void {
    this.title = newTitle;
  }

  toJSON() {
    return {
      id: this.id.value,
      title: this.title.value,
      completed: this.completed,
    }
  }
}
