import logo from './logo.svg';
import './App.css';
import React , {useEffect, useState} from "react";
import {Button, Grid, Typography, Fragment, Container} from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import {getMatches} from "./api/Api";


function App() {


  const [matches,setMatches]=useState([]);



  useEffect(() => {
     getMatches()
       .then((data) => {
         console.log(data.matches);
         setMatches(data.matches);
       })
       .catch((error) => {});
   }, []);

  // useEffect(()=>{
  //   getMatches()
  //     .then((data)=>setMatches(data.matches))
  //     console.log(matches);
  //   })
  //     .catch((error)=>alert("could not load data"));
  // }, []);


  // return (
  //   <div className="App">
  //
  //   <Navbar> </Navbar>
  //   <Typography variant="h3" style={{marginTop:20}}>Welcome to Live Score</Typography>
  //
  //   <Grid container>
  //   <Grid sm="2"></Grid>
  //   <Grid sm="8">
  //   {
  //     matches.map((match)=>(
  //
  //       // {(match.type=="Twenty20")?():''}
  //       <Fragment>
  //         {match.type=="Twenty20"?(
  //           <MyCard key={match.unique_id} match={match}/>
  //         ):(
  //           ""
  //         )}
  //
  //
  //       </Fragment>
  //
  //     ))
  //   }
  //   </Grid>
  //   </Grid>
  //
  //
  //
  //
  //
  //
  //
  //   </div>
  // );
  return (
   <div className="App">
     <Navbar></Navbar>
     <Container>
       <Grid container>
         <Grid item xs={12}>
           {matches.map((match) => (
             <MyCard match={match}></MyCard>
           ))}
         </Grid>
       </Grid>
     </Container>
   </div>
 );
}

export default App;
