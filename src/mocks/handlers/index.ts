import { default as usersHandler } from "./users.handler";
import { default as productsHandler } from "./products.handler";

export const handlers = [...usersHandler, ...productsHandler];
