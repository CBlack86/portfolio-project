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

const Projects = () => {
    
  return (
      <>
          <div>
              <h1>Open Source Projects</h1>
                  <ul>
                      <li>Group Calclator Project</li>
                      <img src={group_calc} className="proImg" />
                  </ul>
          </div>
          <div>
              <h1>freeCodeCamp Projects</h1>
                  <ul>
                      <li>"25 + 5 Clock"</li>
                      <img src={pomo_clock} className="proImg" />
                      <li>"Javascript Calculator"</li>
                      <img src={fcc_calc} className="proImg" />
                      <li>"Drum Machine"</li>
                      <img src={drum} className="proImg" />
                      <li>"Markdown Previewer"</li>
                      <img src={md_preview} className="proImg" />
                      <li>"Random Quote Machine"</li>
                      <img src={quote} className="proImg" />
                  </ul>
          </div>
      </>
  )
}

export default Projects;