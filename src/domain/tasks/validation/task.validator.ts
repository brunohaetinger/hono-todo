export class TaskValidator {
  static validate(task: Task): void {
    if(task.title.value.includes("🔥"))
      throw new Error("Title cannot contain emojis")
  }
}
