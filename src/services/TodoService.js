import GenericService from "./GenericService";
class TodosService extends GenericService {
  constructor() {
    super();
  }
  addTodo = (data) => this.post("todos", data);
  deleteTodo = (_id) => this.delete("todos/" + _id);
  // updateFlight = (_id, data) => this.put("flights/" + _id, data);
  getTodo = () => this.get("todos/");
  // getSingleFlight = (id) => this.get("flights/" + id);
}

let todoService = new TodosService();
export default todoService;
