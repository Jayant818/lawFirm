import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Blog, CreateBlogRequest } from '../../../types/blog';

const BLOGS_FILE_PATH = path.join(process.cwd(), 'data', 'blogs.json');

// Ensure the data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read blogs from file
function readBlogs(): Blog[] {
  ensureDataDirectory();
  try {
    if (!fs.existsSync(BLOGS_FILE_PATH)) {
      return [];
    }
    const data = fs.readFileSync(BLOGS_FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
}

// Write blogs to file
function writeBlogs(blogs: Blog[]): void {
  ensureDataDirectory();
  try {
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(blogs, null, 2));
  } catch (error) {
    console.error('Error writing blogs:', error);
    throw new Error('Failed to save blogs');
  }
}

// GET - Fetch all blogs
export async function GET() {
  try {
    const blogs = readBlogs();
    // Sort by creation date (newest first)
    const sortedBlogs = blogs.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return NextResponse.json(sortedBlogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST - Create a new blog
export async function POST(request: NextRequest) {
  try {
    const body: CreateBlogRequest = await request.json();
    
    if (!body.title || !body.body) {
      return NextResponse.json(
        { error: 'Title and body are required' },
        { status: 400 }
      );
    }

    const blogs = readBlogs();
    const newBlog: Blog = {
      id: Date.now().toString(),
      title: body.title,
      body: body.body,
      image: body.image || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    blogs.push(newBlog);
    writeBlogs(blogs);

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}
