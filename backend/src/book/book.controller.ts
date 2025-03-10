import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async createBook(
    @Body() body: { name: string; category_id: string;},
  ): Promise<Book> {
    const { name, category_id } = body;
    return this.bookService.createBook(name, category_id);
  }
  @Get()
  async getAllBooks(@Query('category_id') categoryId?: string): Promise<Book[]> {
    if (categoryId) {
      return this.bookService.getBooksByCategory(categoryId);
    }
    return this.bookService.getAllBooks();
  }
}