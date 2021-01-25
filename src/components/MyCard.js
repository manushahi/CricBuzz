import React, {useState,Fragment} from "react";
import {Card,CardContent, Typography, CardActions, Button, Grid,Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@material-ui/core";




  import { getMatchDetail } from "../api/Api";


const MyCard=({match})=>{

  const [detail, setDetail]=useState({});
  const [open, setOpen]=useState(false);

  const handleClick=(id)=>{
    getMatchDetail(id).then(data=>{console.log("Match Data" ,data);
  setDetail(data);
  handleOpen();
})
  .catch((error)=>console.log(error));
  };




  const getMatchCart=()=>{
    return (
        <Card style ={{marginTop:25}}>
        <CardContent>
        <Grid container justify="center"  alignItems="center" spacing={4}>

        <Grid item >
        <Typography variant="h5">{match["team-1"]}</Typography>
        </Grid>

        <Grid item>
                 <img
                   style={{ width: 850 }}
                   src={require("../img/vs.png")}
                   alt=""
                 />
                <Typography> VS </Typography>
               </Grid>

            <Grid item>
            <Typography variant="h5">{match["team-2"]}</Typography>
            </Grid>

        </Grid>


        </CardContent>
        <CardActions>
        <Grid container justify ="center" spacing={3}>

        <Button onClick={()=>{
          handleClick(match.unique_id);
        }}
        item variant="contained" color="primary">
        Show Details
        </Button>

        <Button style={{marginLeft:12}} item variant="contained" color="primary">
        Start Time{new Date(match.dateTimeGMT).toLocaleString()}
        </Button>

        </Grid>
        </CardActions>
        </Card>


    );

  };

  const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};






   const getDialog=()=>(
     <Dialog open={open} onClose={handleClose}>
         <DialogTitle id="alert-dialog-title">{"Match Detail.."}</DialogTitle>
         <DialogContent>
         <DialogContentText id="alert-dailog-description">
         <Typography>{detail.stat}</Typography>
         <Typography>Match <span style={{fontStyle:"italic", fontWeight:"bold"}}>
         {detail.matchStarted?"Started":"Still Not Started"}{""}
          </span></Typography>
          Score
          <span style={{fontStyle:"italic", fontWeight:"bold"}}>
          {detail.score}
           </span>

         </DialogContentText>
         </DialogContent>
         <DialogActions>
         <Button onClick={handleClose} color="primary" autoFocus>
         close
         </Button>

         </DialogActions>
     </Dialog>
   );

  // const getDialog=()={
  //   <Dialog open={open} onClose={handleClose}>
  //   <DialogTitle>
  //   </Dialog>
  // }


   return(
    <Fragment>
   {getMatchCart()}
   {getDialog()}
   </Fragment>);


};

export default MyCard;
