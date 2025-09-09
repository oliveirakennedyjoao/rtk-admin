import { Routes, Route, Outlet } from "react-router";
import { AppTemplate } from "./components";
import {
  NotFoundView,
  ProductsListPage,
  UsersListView,
  UsersShowView,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route
        element={
          <AppTemplate>
            <Outlet />
          </AppTemplate>
        }
      >
        <Route path="/users">
          <Route index element={<UsersListView />} />
          <Route path=":id" element={<UsersShowView />} />
        </Route>
        <Route path="/products">
          <Route index element={<ProductsListPage />} />
          {/* <Route path=":id" element={<ProductsShowView />} /> */}
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}

export default App;
