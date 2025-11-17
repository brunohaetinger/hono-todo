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

app.get('/tasks/:id', (c) => {
  const id = c.req.param("id");
  const task = tasks.find(t => t.id === id);
  if(!task){
    return c.json({message: 'Task not found'}, {status: 404})
  }
  return c.json(task);
})

export default app
