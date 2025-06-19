import { dbConnect } from "@/app/config/dbConnect";
import Task from "@/app/lib/schemas/Task";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const taskId = params.id;
    const { status } = await req.json();

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status },
      { new: true }
    );

    if (!updatedTask) {
      return new Response(JSON.stringify({ error: "Task not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(updatedTask), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating task:", error);
    return new Response(JSON.stringify({ error: "Failed to update task" }), {
      status: 500,
    });
  }
}
