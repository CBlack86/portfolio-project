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


import mainLogo from "./assets/Cody Design.svg";
import {
  AppBar,
  Toolbar,
  Typography, 
  Button,
  Switch
} from "@mui/material"; 
import "./NavBar.css";
import { useNavigate } from "react-router-dom"
import {useRecoilState} from 'recoil';


const NavBar = () => {
  const nav = useNavigate();
   


  return (
    <>
      <AppBar position='relative'>
        <Toolbar >
          <Typography >
            
            <img src={mainLogo} id="logo" />
            <Button color='inherit'  onClick={() => nav('/')}>Home</Button>
            <Button color='inherit' onClick={() => nav('/about')}>About Me</Button>
            <Button color='inherit' onClick={() => nav('/projects')}>Projects</Button>
            <Button color='inherit' onClick={() => nav('/contact')}>Contact Me</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default NavBar; 