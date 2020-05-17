import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, CardHeader } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../styles/Courses.css'

const News = () => (
  <div>
    <h1 align="center"> Courses</h1>
    <p align="center">Choose your own path in life</p>
        <Grid container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
    >
        <Card className="cardinfo">
            <CardHeader title="Hello Everyone" subheader="Course 1"/>
            <CardContent>
            <Button variant="contained" style={{color:'Black'}}><Link to="/register">View Course</Link></Button>
            </CardContent>
        </Card>
        <Card className="cardinfo">
            <CardHeader title="Hello Everyone" subheader="Course 1"/>
            <CardContent>
            <Button variant="contained" style={{color:'Black'}}><Link to="/register">View Course</Link></Button>
            </CardContent>
        </Card>
        <Card className="cardinfo">
            <CardHeader title="Hello Everyone" subheader="Course 1"/>
            <CardContent>
            <Button variant="contained" style={{color:'Black'}}><Link to="/register">View Course</Link></Button>
            </CardContent>
        </Card>
    </Grid>
  </div>

);

export default News;