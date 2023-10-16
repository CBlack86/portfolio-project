// Copyright 2023 CODY BLACK
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import drum from "./assets/drum-machine.png";
import fcc_calc from "./assets/fcc-calculator-project.png";
import group_calc from "./assets/group-calculator-project.png";
import md_preview from "./assets/markdown-previewer.png";
import pomo_clock from "./assets/pomodoro-clock.png";
import quote from "./assets/random-quote-generator.png";
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
  } from '@mui/material';
import "./Projects.css";
import React from "react";


const Projects = () => {
    
  return (
    <React.Fragment>
    <h1>Projects</h1>
      <Grid container spacing="2">
              
              <Grid item xs={6} md={8}>
                  <Card sx={{minWidth: 275, maxWidth: 345}} variant="outlined">
                    <CardMedia sx={{height: 140}}
                    image={group_calc}
                    title="Group Calculator Project" 
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">Group Calculor Project</Typography>
                        <Typography variant="body2" color="text.secondary">
                        This was a project that I undertook with a group of students under the supervision of a mentor
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} md={8}>
                  <Card sx={{minWidth: 275, maxWidth: 345}} variant="outlined">
                  <CardMedia sx={{height: 140}}
                    image={pomo_clock}
                    title="25 + 5 Clock" 
                    />
                      
                  </Card>
                </Grid>
                <Grid item xs={6} md={8}>
                  <Card sx={{minWidth: 275, maxWidth: 345}} variant="outlined">
                  <CardMedia sx={{height: 140}}
                    image={fcc_calc}
                    title="JavaScript Calculator" 
                    />
                     
                    </Card>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Card sx={{minWidth: 275, maxWidth: 345}} variant="outlined">
                    <CardMedia sx={{height: 140}}
                    image={drum}
                    title="Drum Machine" 
                    />
                      
                    </Card>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Card sx={{minWidth: 275, maxWidth: 345}} variant="outlined">
                    <CardMedia sx={{height: 140}}
                    image={md_preview}
                    title="Markdown Previewers" 
                    />
                      
                    </Card>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Card sx={{minWidth: 275, maxWidth: 345}} variant="outlined">
                    <CardMedia sx={{height: 140}}
                    image={quote}
                    title="Random Quote Machine" 
                    />
                      
                  </Card>
                </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Projects;