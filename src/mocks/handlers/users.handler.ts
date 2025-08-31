import { http, HttpResponse } from "msw";

const usersHandler = [
  http.get("/users", () => {
    return HttpResponse.json([{ id: 1, name: "John Doe" }]);
  }),
];

export default usersHandler;
