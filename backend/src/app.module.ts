import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/book.entity';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';
import { Category } from './category/category.entity';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'guest',
      password: 'guest',
      database: 'nestjs_db',
      entities: [Book, Category],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Book, Category]),
  ],
  controllers: [AppController, BookController, CategoryController],
  providers: [AppService, BookService, CategoryService],
})
export class AppModule {}
