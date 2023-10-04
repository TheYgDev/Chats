import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import FormProvider from "../../components/hook-form/FormProvider";
import RHFAutocomplete from "../../components/hook-form/RHFAutoComplete";
import RHFTextField from "../../components/hook-form/RHFTextField";

const MEMBERS = ["name 1", "name 3", "name 2"];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupScheme = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have at least 2 memmbers"),
  });

  const defaultValues = {
    title: "",
    members: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupScheme),
    defaultValues,
  });

  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //pi call
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
    <Stack spacing={3}>
      <RHFTextField name="title" label="Title" />
      <RHFAutocomplete
        name="members"
        label="Members"
        multiple
        freeSolo
        options={MEMBERS.map((option) => option)}
        ChipProps={{ size: "medium" }}
      />
      <Stack
        spacing={2}
        direction={"row"}
        alignItems="center"
        justifyContent={"end"}
      >
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Stack>
    </Stack>
  </FormProvider>
  );
};

function CreateGroup({ open, handleClose }) {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        sx={{ p: 4 }}
      >
        {/* Title */}
        <DialogTitle sx={{mb:3}}>Create New Group</DialogTitle>
        {/* content */}
        <DialogContent>
          <CreateGroupForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreateGroup;
