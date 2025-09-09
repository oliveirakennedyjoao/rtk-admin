import { http, HttpResponse } from "msw";
import products from "../fixtures/products.json";

const productsHandler = [
  http.get("/api/products", () => {
    return HttpResponse.json(products);
  }),
  http.get("/api/products/:id", (req) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === Number(id));
    if (product) {
      return HttpResponse.json(product);
    } else {
      return HttpResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
  }),
];

export default productsHandler;
