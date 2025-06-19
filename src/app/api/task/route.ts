import { dbConnect } from "../../config/dbConnect";
import Task from "../../lib/schemas/Task";

// POST: Create a new task
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

    // Normalize the status value
    const statusMap: Record<string, string> = {
      "to do": "To Do",
      "in progress": "In Progress",
      "done": "Done",
    };
    const formattedStatus = statusMap[Status?.toLowerCase()] || "To Do";

    // Validate required fields
    if (!Title || !Project) {
      return new Response(
        JSON.stringify({ error: "Title and Project are required" }),
        { status: 400 }
      );
    }

    // Create the task in the database
    const newTask = await Task.create({
      title: Title,
      project: Project,
      totalSubtasks: TotalSubtasks,
      completedSubtasks: CompletedSubtasks,
      dueDate: Date,
      comments: Comments,
      status: formattedStatus,
    });

    return new Response(JSON.stringify(newTask), { status: 201 });
  } catch (error) {
    console.error("Error creating task:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create task" }),
      { status: 500 }
    );
  }
}

// GET: Fetch all tasks
export async function GET() {
  await dbConnect();

  try {
    const tasks = await Task.find();
    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch tasks" }),
      { status: 500 }
    );
  }
}
