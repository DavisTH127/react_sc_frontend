import React from 'react';
import Header from './Header';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import {Link} from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => (
  <div className="background-header">
    <br/>
    <Typography variant="display3" gutterBottom align="center" style={{color:'White'}}>LIKE BUSINESS SCHOOL,</Typography>
    <Typography variant="display3" gutterBottom align="center" style={{color:'White'}}>ONLY 100,000X BETTER.</Typography>
    <div align="center"  >
      <Button variant="contained" style={{color:'White'}}><Link to="/register">Getting Started</Link></Button>
    </div>
  </div>

);

export default LandingPage;