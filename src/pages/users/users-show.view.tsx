import { Button, Divider, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useGetUserByIdQuery } from "../../services";

export default function UsersShowView() {
  const { id = "" } = useParams();
  const navigate = useNavigate();

  console.log("User ID:", id); // Debugging line

  const {
    data: user,
    error,
    isFetching,
  } = useGetUserByIdQuery(id, { skip: !id });

  if (isFetching) {
    return <Paper>Loading...</Paper>;
  }

  if (error) {
    return <Paper>Error fetching user</Paper>;
  }

  if (!user) {
    return <Paper>User not found</Paper>;
  }

  return (
    <Paper sx={{ padding: 4 }}>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <Divider />
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{ marginTop: 2 }}
      >
        Voltar
      </Button>
    </Paper>
  );
}
