import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService],
  imports: [HttpModule]
})
export class DepartmentModule { }
