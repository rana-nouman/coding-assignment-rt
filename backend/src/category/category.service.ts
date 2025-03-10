import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private CategoryRepository: Repository<Category>,
  ) {}

  async createCategory(name: string): Promise<Category> {
    const Category = this.CategoryRepository.create({
      name,
    });
    return this.CategoryRepository.save(Category);
  }

  async getAllCategories(): Promise<Category[]> {
    return this.CategoryRepository.find();
  }
}