import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private BookRepository: Repository<Book>,
  ) {}

  async createBook(name: string, category_id: string): Promise<Book> {
    const book = this.BookRepository.create({
      name,
      category_id,
    });
    return this.BookRepository.save(book);
  }

  async getAllBooks(): Promise<Book[]> {
    return this.BookRepository.find();
  }

  async getBooksByCategory(category_id: string): Promise<Book[]> {
    return this.BookRepository.find({ where: { category_id: category_id } });
  }
}