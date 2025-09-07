import { Routes, Route, Navigate, Outlet } from "react-router";
import { AppTemplate } from "./components";
import { UsersView } from "./pages";

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
        <Route path="/users" element={<UsersView />} />
        <Route path="*" element={<Navigate to="/users" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
