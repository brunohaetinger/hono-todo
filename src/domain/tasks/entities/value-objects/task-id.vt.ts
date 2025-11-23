export class TaskId {
  constructor(public readonly value: number) {
    if (!value) throw new Error("TaskId cannot be empty")
  }
}
