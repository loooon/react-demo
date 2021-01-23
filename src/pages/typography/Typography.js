import React from "react";
import { Grid, Button } from "@material-ui/core";
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
 
// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";


export default function TypographyPage() {
  var classes = useStyles();
 
 
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }

  return (
<>
      <PageTitle title="Pdf2word" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
     <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*,.pdf"
    />
        </Grid>
        
      </Grid>
    </>
  );
}