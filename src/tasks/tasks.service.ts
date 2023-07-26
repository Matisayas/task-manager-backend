import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Promise } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskStatus } from './tasks-status.enum';
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

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.tasksRepository.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.tasksRepository.save(task);
    return task;
  }

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
