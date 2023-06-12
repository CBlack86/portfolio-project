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
import {useRecoilState} from 'recoil';
import {displayState} from './State.tsx';


const About = () => {
  const [testCount] = useRecoilState(displayState)  

  return (
      <>
        <span>Test Counter: {testCount}</span>
         <p>
             Welcome to my page, my name is Cody Black and I am an aspiring full stack software
             engineer. While receiving my Master's Degree in CyberSecurity I was required to learn
             python which I quickly picked up. I loved the challenge that coding provided and after
             graduating I have working on supplementing the skills I have. After looking at he landscape
             for potential jobs I decided to pivot from Python to leraning other languages so I could
             become a full stack engineer. I started freeCodeCamp at the beginning of February 2023
             and have not looked back. I have now complete the first three certifications for this 
             bootcamp and now having a greater understanding of HTML, CSS, Javascript, and React this
             site is going to be where I share the projects I am working on. Please enjoy and if you'd
             like to reach out to me, go to my contacts page; I'm always happy to speak with new people. 
         </p> 
      </>
  )
}
export default About;