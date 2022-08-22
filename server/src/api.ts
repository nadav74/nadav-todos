
export function retrieveLists(dbo: any): object {
  console.log('retrieveLists: called');
  const o1 = { id: "12345", name: "List 1" };
  const o2 = { id: "12346", name: "Foo" };
  const o3 = { id: "12347", name: "Bar" };
  const messageList = [o1, o2, o3];
  return messageList;
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

export function deleteList(dbo:any, id: string): boolean {
  return true;
}

export function createTask(dbo: any, listId: number, headline: string, content: string): string {
    return "success";
}

export function updateTask(dbo: any, listId: number, headline: string, content: string): boolean {
  return false;
}

export function deleteTask(dbo: any, listId: number): boolean {
return false;
}

export function retrieveTasks(dbo: any, listId: number) {
}
