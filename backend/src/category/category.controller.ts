import { Controller, Post, Get, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Post()
  async createCategory(
    @Body() body: { name: string;},
  ): Promise<Category> {
    const { name } = body;
    return this.CategoryService.createCategory(name);
  }

  @Get()
  getHello(): Promise<Category[]> {
    return this.CategoryService.getAllCategories();
  }
}