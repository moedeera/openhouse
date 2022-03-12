import React from "react";
import { ButtonGroup } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
export const ProjectThree = () => {
  return (
    <div style={{ margin: "50px auto" }}>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        {" "}
        <Grid container spacing={14} justifyContent={"center"}>
          <Grid>
            <Paper
              style={{
                height: 75,
                width: 250,
              }}
            />
          </Grid>

          <Grid>
            <Paper
              style={{
                height: 75,
                width: 250,
              }}
            />
          </Grid>

          <Grid>
            <Paper
              style={{
                height: 75,
                width: 250,
              }}
            />
          </Grid>
        </Grid>
        <ButtonGroup>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<SaveIcon />}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<DeleteIcon />}
          >
            Discard
          </Button>
        </ButtonGroup>
        <Checkbox />
        <TextField variant="outlined" type="email" label="email" />
      </Container>
    </div>
  );
};
