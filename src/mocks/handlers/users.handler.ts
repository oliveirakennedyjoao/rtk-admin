import { http, HttpResponse } from "msw";
import users from "../fixtures/users.json";

const usersHandler = [
  http.get("/api/users", () => {
    return HttpResponse.json(users);
  }),
  http.get("/api/users/:id", (req) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === Number(id));
    if (user) {
      return HttpResponse.json(user);
    } else {
      return HttpResponse.json({ message: "User not found" }, { status: 404 });
    }
  }),
];

export default usersHandler;
