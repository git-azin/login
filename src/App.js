import  React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import routes, { gridrout } from "./route.js";
import {Navigate, Route, Routes} from "react-router-dom";

const getRoutes = (allRoutes) =>
allRoutes.map((route) => {
  if (route.route) {
    return (
      <Route path={route.route} element={route.component} key={route.key}/>
    );
  }
});



const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',...theme.typography.body2,
padding: theme.spacing(1),
textAlign: 'center',
color: theme.palette.text.secondary
}));

const RowAndColumnSpacing=()=>{
  return (
    <Box width={"100%"}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 8, md: 12 , lg:2 }}>
        <Grid item xs={4}>
        <Item>1</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>3</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
<Routes>
{getRoutes(routes)}
<Route path="/" element={<Navigate to="/grid" />} />
</Routes>
export default RowAndColumnSpacing;
