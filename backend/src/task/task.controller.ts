import { Controller, Post, Get, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(
    @Body() body: { name: string; description: string; completed: boolean },
  ): Promise<Task> {
    const { name, description, completed } = body;
    return this.taskService.createTask(name, description, completed);
  }

  @Get()
  getHello(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }
}