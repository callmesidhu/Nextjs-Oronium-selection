// src/types/index.ts
export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: Author;
  readTime: string;
}
