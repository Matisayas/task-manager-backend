import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  // if (Object.keys(filterDto).length) {
  // } else {
  //   return this.tasksService.getAllTasks();
  //}
  //}

  //@Get('/:id')
  ////return this.tasksService.getTaskById(id);
  //}

  //@Post()
  //createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //return this.tasksService.createTask(createTaskDto);
  //}

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
