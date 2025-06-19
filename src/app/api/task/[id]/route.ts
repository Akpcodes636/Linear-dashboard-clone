import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/config/dbConnect";
import Task from "@/app/lib/schemas/Task";

// PATCH /api/task/:id - Update task
export async function PATCH(req: NextRequest) {
  await dbConnect();

  try {
    const { status, ...otherUpdates } = await req.json();

    // Extract ID from the URL
    const url = req.nextUrl.pathname;
    const id = url.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "Missing task ID" }, { status: 400 });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status, ...otherUpdates },
      { new: true }
    );

    if (!updatedTask) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(updatedTask, { status: 200 });
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}

// DELETE /api/task/:id - Delete task
export async function DELETE(req: NextRequest) {
  await dbConnect();

  try {
    const url = req.nextUrl.pathname;
    const id = url.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "Missing task ID" }, { status: 400 });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}
