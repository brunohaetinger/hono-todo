import { Hono } from 'hono'
import { taskController } from './infrastructure/adapters/presentation/task.controller';

const app = new Hono()

app.route('/tasks', taskController);

app.get('/', (c) => {
  return c.text('To-Do API')
})


export default app
