export class TaskId {
  constructor(public readonly value: string){
    if(!value) throw new Error("TaskId cannot be empty")
  }
}
