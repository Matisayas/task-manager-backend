import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.repository';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  //return this.tasks;
  //}
  // getTasksWithFilterDto(filterDto: GetTasksFilterDto): Task[] {
  // const { status, search } = filterDto;
  //    let tasks = this.getAllTasks();
  // do something with status
  //  if (status) {
  //  tasks = tasks.filter((task) => task.status === status);
  //}
  //  if (search) {
  //  tasks = tasks.filter((task) => {
  //  if (task.title.includes(search) || task.description.includes(search)) {
  //  return true;
  //   }
  // return false;
  //   });
  //}
  // return tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task Whit ID"${id}" not found`);
    }
    return found;
  }
  //getTaskById(id: string): Task {
  //const found = this.tasks.find((task) => task.id === id);
  // throw new NotFoundException(`Task Whit ID"${id}" not found`);
  // }
  //return found;
  //}
  //createTask(createTaskDto: CreateTaskDto): Task {
  // const { title, description } = createTaskDto;
  //const task: Task = {
  // id: uuid(),
  //title: title,
  //description: description,
  // status: TaskStatus.OPEN,
  //};
  //this.tasks.push(task);
  //return task;
  // }
  //deleteTask(id: string): void {
  //const found = this.getTaskById(id);
  //this.tasks = this.tasks.filter((task) => id !== found.id);
  //}
  //updateTaskStatus(id: string, status: TaskStatus) {
  //const task = this.getTaskById(id);
  // task.status = status;
  //  return task;
  //}
}
