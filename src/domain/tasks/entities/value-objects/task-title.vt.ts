export class TaskTitle {
  constructor(public readonly value: string){
    if(!value || value.length < 3) 
      throw new Error("Task Title must be at least 3 characters");
  }
}
