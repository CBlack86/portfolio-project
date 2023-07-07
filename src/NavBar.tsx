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

import {Link}  from "react-router-dom";
import mainLogo from "./assets/logoipsum-298.svg";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@mui/material";
import "./NavBar.css";

const NavBar = () => {

  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Typography>
            <div className="nav-logo">
            <img src={mainLogo} id="logo" />
            </div>
            <div className="nav-button">
              <ul className="list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
              </ul>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default NavBar;