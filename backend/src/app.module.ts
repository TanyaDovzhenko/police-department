import * as path from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [
    DepartmentModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'static'),
      exclude: ['/department/(.*)'],
    })
  ]
})
export class AppModule { }
