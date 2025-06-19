import { dbConnect } from "../../config/dbConnect";
import Task from "../../lib/schemas/Task";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    console.log("Request body:", body);

    const {
        Title,
        Project,
        TotalSubtasks,
        CompletedSubtasks,
        Date,
        Comments,
        Status,
      } = body;

    if (!Title || !Project) {
      return new Response(JSON.stringify({ error: "Title and Project are required" }), {
        status: 400,
      });
    }

    const newTask = await Task.create({
        title: Title,
        project: Project,
        totalSubtasks: TotalSubtasks,
        completedSubtasks: CompletedSubtasks,
        dueDate: Date,
        comments: Comments,
        status: Status.trim().toLowerCase()
      });

    return new Response(JSON.stringify(newTask), { status: 201 });
  } catch (error) {
    console.error("Error creating task:", error); // 👈 log actual error
    return new Response(JSON.stringify({ error: "Failed to create task" }), {
      status: 500,
    });
  }
}

export async function GET() {
    await dbConnect();
    const tasks = await Task.find();
    console.log(tasks)
    return new Response(JSON.stringify(tasks), { status: 200 });
}