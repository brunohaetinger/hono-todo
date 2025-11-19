export class Task {
  constructor(
    private readonly id: string,
    private title: TaskTitle,
    private completed: boolean = false,
  ){}

  complete(): void {
    this.completed = true;
  }

  rename(newTitle: TaskTitle): void {
    this.title = title;
  }

  toJSON() {
    return {
      id: this.id.value,
      title: this.title.value,
      completed: this.completed,
    }
  }
}
