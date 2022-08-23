
export function retrieveLists(dbo: any): object {
  console.log('retrieveLists: called');
  const o1 = { id: "12345", name: "List 1" };
  const o2 = { id: "12346", name: "Foo" };
  const o3 = { id: "12347", name: "Bar" };
  return [o1, o2, o3];
}

export function retrieveList(dbo: any, id: string): object {
  console.log('retrieveList: called, id=' + id);

  switch (id)
  {
    case "12345":
      return { id: "12345", name: "List 1" };

    case "12346":
      return { id: "12346", name: "Foo" };

    case "12347":
      return { id: "12347", name: "Bar" };

    default:
      throw "Not found";
  }
}

export function createList(dbo:any, list: object): string {
  return "12348";
}

export function deleteList(dbo:any, listId: string): boolean {
  return true;
}

export function listTasks(dbo: any) {
  const t1 = { id: "1111", headline: "This is a headline", content: "This is content" };
  const t2 = { id: "1112", headline: "Headline foo", content: "Content foo" };
  const t3 = { id: "1113", headline: "Headline bar", content: "Content bar" };
  const t4 = { id: "1114", headline: "Go to the supermarket", content: "Buy bread. cheese & veggies" };
  return [ t1, t2, t3, t4 ];  
}

export function listTask(dbo: any, taskId: string) {
  switch (taskId)
  {
    case "1111":
      return { id: "1111", headline: "This is a headline", content: "This is content" };

    case "1112":
      return { id: "1112", headline: "Headline foo", content: "Content foo" };

    case "1113":
      return { id: "1113", headline: "Headline bar", content: "Content bar" };

    case "1114":
      return { id: "1114", headline: "Go to the supermarket", content: "Buy bread. cheese & veggies" };

    default:
      throw "Not found";
  }
}

export function createTask(dbo: any, listId: string, task: object): string {
    return "1115";
}

export function updateTask(dbo: any, listId: string, headline: string, content: string): boolean {
  return true;
}

export function deleteTask(dbo: any, listId: string): boolean {
  return true;
}

export function retrieveTasks(dbo: any, listId: string) {
}
