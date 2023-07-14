export const CreateObjectToDo = (text: string) => {
  const todo = {
    text: text,
    date: new Date().toLocaleDateString(),
    id: Date.now(),
    isComplete: false,
  };
  return todo;
};
