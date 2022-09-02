import React ,{useState} from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBaneer from "../components/HeroBaneer";


const Home = () => {
  return (
    <Box>
      <HeroBaneer />
      <SearchExercises />
      <Exercises />
    </Box>
  );
}

export default Home