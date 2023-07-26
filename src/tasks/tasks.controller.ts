import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/:id')
  getTasksById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  //@Delete('/:id')
  //deleteTaskById(@Param('id') id: string): void {
  //return this.tasksService.deleteTask(id);
  //}

  //@Patch('/:id/status')
  //updateTaskStatus(
  //@Param('id') id: string,

  //@Body() updateTaskStatusDto: UpdateTaskStatusDto,
  //): Task {
  // const { status } = updateTaskStatusDto;
  //return this.tasksService.updateTaskStatus(id, status);
  //}
}
