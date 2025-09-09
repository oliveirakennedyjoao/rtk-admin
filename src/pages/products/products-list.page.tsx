import productsApi from "../../services/products.api";

export default function ProductsListPage() {
  const { data, isFetching, isError } =
    productsApi.endpoints.getProducts.useQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
