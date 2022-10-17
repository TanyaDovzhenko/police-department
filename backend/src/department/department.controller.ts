import { Controller, Get, Query } from '@nestjs/common';
import { DepartmentService } from './department.service';


@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) { }

  @Get()
  findAll() {
    return this.departmentService.findAll()
  }

  @Get('character')
  findOne(@Query() query) {
    return this.departmentService.findOne(query.name)
  }
}
