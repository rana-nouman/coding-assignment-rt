import { Controller, Post, Get, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async createBook(
    @Body() body: { name: string; category: string;},
  ): Promise<Book> {
    const { name, category } = body;
    return this.bookService.createBook(name, category);
  }

  @Get()
  getHello(): Promise<Book[]> {
    return this.bookService.getAllBooks();
  }
}