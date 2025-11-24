import { randomUUIDv7 } from "bun"

export class TaskId {
  constructor(public readonly value: string) {
    if (!value) throw new Error("TaskId cannot be empty")
  }

  public static create() {
    return new TaskId(randomUUIDv7());
  }
}
