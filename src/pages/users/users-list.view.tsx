import { Box, Button, Paper, Stack } from "@mui/material";
import { useGetUsersQuery } from "../../services";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import type { User } from "../../model";
import { Outlet, useNavigate } from "react-router";

import AddIcon from "@mui/icons-material/Add";

export default function UsersListView() {
  const navigate = useNavigate();

  const { data: users, error, isFetching } = useGetUsersQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching users</div>;
  }

  return (
    <Stack spacing={2}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={() => navigate("/users/create")}
        >
          Create User
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user: User) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => navigate(`/users/${user.id}`)}
              >
                <TableCell align="right">{user.id}</TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Outlet />
    </Stack>
  );
}
