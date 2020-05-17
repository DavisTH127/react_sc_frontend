import React from 'react';
import Header from './Header';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import {Link} from 'react-router-dom';
import '../styles/News.css';

const News = () => (
  <div className="background-news">
    <br/>
    <div className="quote">
      <Typography variant="display3" gutterBottom align="left" style={{color:'White'}}>MIND-BLOWING COURSES</Typography>
      <Typography variant="display3" gutterBottom align="left" style={{color:'White'}}>THAT CHANGE LIVES.</Typography>
      <h2 style={{color:'White'}}>THE JUMPCUT MISSION</h2>
      <p style={{color:'White'}}>We help entrepreneurs launch businesses leveraging the latest trends and technology.<br></br>Like starting a successful YouTube channel with advanced viral marketing strategies.<br></br> Or building digital products that almost sell themselves. Ready to make the leap?</p>
    </div>
  </div>

);

export default News;