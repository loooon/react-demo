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
 
  const api_url = "/transfer/pdf2word"
 
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: api_url }  
  }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { 
    if("done" == status){
      const fd = new FormData()
      fd.append("file",file)
      fetch(api_url, {
        method:'POST',
        body:fd, 
       }).then(aaa => {
        aaa.arrayBuffer().then(res => { 
          let blob = new Blob([res], { type: 'application/msword' });
          if (window.navigator.msSaveOrOpenBlob) {
              navigator.msSaveBlob(blob, res.fileName)
          } else {
            var index = file.name.lastIndexOf('.');
            var downloadname = file.name.substring(0,index) + ".doc";
              let downloadElement = document.createElement('a');
              let href = window.URL.createObjectURL(blob); // 创建下载的链接
              downloadElement.href = href;
              downloadElement.download = downloadname; // 下载后文件名
              document.body.appendChild(downloadElement);
              downloadElement.click(); // 点击下载
              document.body.removeChild(downloadElement); // 下载完成移除元素
              window.URL.revokeObjectURL(href); // 释放掉blob对象
          }
        })
      })

    }

    
    
    console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => {
    console.log(files.map(f => f.meta))
   }

  return (
<>
      <PageTitle title="Pdf2word" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Dropzone
            inputContent ="点击或拖拽上传需要转换的PDF文件"
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept=".pdf"
            // accept="image/*,audio/*,video/*,.pdf"
          />
        </Grid>
        
      </Grid>
    </>
  );
}