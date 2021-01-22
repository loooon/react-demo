import React from "react";
import { Grid, Button } from "@material-ui/core";
 
 
// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";


export default function TypographyPage() {
  var classes = useStyles();
 
  
  return (
<>
      <PageTitle title="Pdf2word" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
     <Button
        variant="contained"
        component="label"
      >
        选择文件
        <input
          type="file"
          hidden
        />
      </Button>
        </Grid>
        
      </Grid>
    </>

    

  );
}