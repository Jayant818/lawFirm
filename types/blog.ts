export interface Blog {
  id: string;
  title: string;
  body: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBlogRequest {
  title: string;
  body: string;
  image: string;
}

export interface UpdateBlogRequest {
  id: string;
  title: string;
  body: string;
  image: string;
}
