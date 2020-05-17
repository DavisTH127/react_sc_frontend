import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/Footer.css';

export default ()=>(

    <div className="row">
      <div class="column">
      <Typography variant="headline" gutterBottom>
        Smart Course
      </Typography>
      </div>
      <div class="column">
        <h2>Company</h2>
        <ul>
          <li>
            <a href="/review">Review</a>
          </li>
          <li>
            <a href="/review">Company</a>
          </li>
          <li>
            <a href="/review">Login</a>
          </li>
        </ul>
      </div> 
      <div class="column">
        <h2>Courses</h2>
        <ul>
          <li>
            <a href="/review">VIRAL ACADEMY</a>
          </li>
          <li>
            <a href="/review">AUTOMATED INCOME MACHINE</a>
          </li>
          <li>
            <a href="/review">VIDEO ADS BOOTCAMP</a>
          </li>
        </ul>
      </div>
    </div>

);