import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Blog, UpdateBlogRequest } from "../../../../types/blog";

const BLOGS_FILE_PATH = path.join(process.cwd(), "data", "blogs.json");

// Ensure the data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data");
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
    const data = fs.readFileSync(BLOGS_FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}

// Write blogs to file
function writeBlogs(blogs: Blog[]): void {
  ensureDataDirectory();
  try {
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(blogs, null, 2));
  } catch (error) {
    console.error("Error writing blogs:", error);
    throw new Error("Failed to save blogs");
  }
}

// GET - Fetch a single blog by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blogs = readBlogs();
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// PUT - Update a blog
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body: UpdateBlogRequest = await request.json();

    if (!body.title || !body.body) {
      return NextResponse.json(
        { error: "Title and body are required" },
        { status: 400 }
      );
    }

    const blogs = readBlogs();
    const blogIndex = blogs.findIndex((b) => b.id === id);

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const updatedBlog: Blog = {
      ...blogs[blogIndex],
      title: body.title,
      body: body.body,
      image: body.image || blogs[blogIndex].image,
      updatedAt: new Date().toISOString(),
    };

    blogs[blogIndex] = updatedBlog;
    writeBlogs(blogs);

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blogs = readBlogs();
    const blogIndex = blogs.findIndex((b) => b.id === id);

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    blogs.splice(blogIndex, 1);
    writeBlogs(blogs);

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
