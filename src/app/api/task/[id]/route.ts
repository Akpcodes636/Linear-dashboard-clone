import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/config/dbConnect";
import Task from "@/app/lib/schemas/Task";

export async function PATCH(req: NextRequest) {
  await dbConnect();

  try {
    const { status } = await req.json();

    // Extract ID from the URL
    const url = req.nextUrl.pathname; // e.g., /api/task/65f2e2b8ab...
    const id = url.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "Missing task ID" }, { status: 400 });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status },
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
