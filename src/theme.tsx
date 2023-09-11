// Copyright 2023 Cody Black
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
import { ThemeOptions } from '@mui/material/styles';


export const DarkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#e85a4f',
    },
    secondary: {
      main: '#d8c3a5',
    },
    error: {
      main: '#f50606',
    },
    info: {
      main: '#376e6f',
    },
  },
};

export const LightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#e85a4f',
    },
    secondary: {
      main: '#d8c3a5',
    },
    error: {
      main: '#f50606',
    },
    info: {
      main: '#376e6f',
    },
  },
};