import { Hono } from 'hono'
import crypto from 'crypto';

const app = new Hono()
const tasks = [];

app.get('/', (c) => {
  return c.text('To-Do API')
})

app.post('/tasks', async(c) => {
  const task = await c.req.json();
  const newTask = {
    id: crypto.randomUUID(),
    title: task.title,
    completed: false,
  };
  tasks.push(newTask);
  return c.json(newTask, {status: 201});
})

export default app
