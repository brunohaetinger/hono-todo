import { Hono } from 'hono';
import { CreateTaskUseCase } from '../../../domain/tasks/use-cases/create-task.uc';
import { TaskRepositoryImpl } from '../data/task.repository';

const taskRepo = new TaskRepositoryImpl();
const createTask = new CreateTaskUseCase(taskRepo);

export const taskController = new Hono();

// POST /tasks
taskController
  .post('/', async (c) => {
    const body = await c.req.json();
    const result = await createTask.execute({ title: body.title });

    return c.json({
      id: result.id.toString(),
      title: result.title.value,
      completed: result.completed,
    })
  })
  .get('/', async (c) => {
    // TODO: create Get All tasks use case
    console.log('/tasks GET')
    const tasks = await taskRepo.findAll();
    return c.json(tasks);
  })

export default taskController;
