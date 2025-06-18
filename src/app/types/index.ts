export interface SendFormData {
    Title:string,
    Project:string,
    TotalSubtasks:number,
    CompletedSubtasks:number,
    Date:string,
    Comments:string,
    Status:"To Do" | "In Progress" | "Done"
}