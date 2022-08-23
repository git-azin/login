import  React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));
function MouseOver(event) {
  event.target.style.width="300px";
}
const RowAndColumnSpacing=()=>{
  return (
    <Box width={"100%"}>
      <Grid container item>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 8, sm: 8, md: 8 , lg:8 }}>
        <Grid item xs={7} >
        <Item>1</Item>
        </Grid>
        <Grid item xs={7} >
        <Item>1</Item>
        </Grid>
        <Grid item xs={7}>
          <Item><h1>Login please</h1></Item>
        </Grid>
        <Grid item xs={7}>
          <Item><input type="text" required placeholder='UserName' onChange={MouseOver} style={{
            width:"250px",
            height:"25px",
            borderRadius:"10px"
          }} /></Item>
        </Grid>
        <Grid item xs={7}>
          <Item><input type="text" required placeholder='PassWord' onChange={MouseOver} style={{
            width:"250px",
            height:"25px",
            borderRadius:"10px"
          }} /></Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <button className='click' style={{
                borderRadius:"10px",
                backgroundColor: "#adc178",
                width:"100px",
                    }}>Click</button>
          </Item>
        </Grid>
      </Grid>
      </Grid> 
    </Box> 
  );
}
export default RowAndColumnSpacing;