import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { coreApi } from "../../services";
import type { AppDispatch } from "../../store";

type UserCreateForm = {
  name: string;
  email: string;
  age: number;
};

export default function UsersCreateView() {
  const { register, handleSubmit } = useForm<UserCreateForm>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserCreateForm> = (data: UserCreateForm) => {
    try {
      dispatch(coreApi.endpoints.createUser.initiate(data));
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return (
    <Paper
      sx={{
        padding: 4,
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h6" component="h1" gutterBottom>
        Create User
      </Typography>
      <Stack
        component="form"
        noValidate
        autoComplete="off"
        sx={{ gap: 2, width: "100%", marginTop: 4 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
          {...register("name")}
        />
        <TextField
          required
          id="outlined-basic"
          label="Email"
          variant="outlined"
          {...register("email")}
        />
        <TextField
          required
          id="outlined-basic"
          label="Age"
          variant="outlined"
          {...register("age")}
        />
        <Button type="submit" variant="contained">
          Create
        </Button>
        <Button variant="outlined" onClick={() => navigate("/users")}>
          Voltar
        </Button>
      </Stack>
    </Paper>
  );
}
