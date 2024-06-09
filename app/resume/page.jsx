"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaFlask,
  FaPython,
  FaJava,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiAdobepremierepro, SiAdobeaftereffects } from "react-icons/si";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { FaMeta } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiCssmodules } from "react-icons/si";
// about data
const about = {
  title: '소개',
  description:
  "다양한 경험을 통해 쌓아온 전문성과 열정을 바탕으로, 창의적이고 혁신적인 솔루션을 제공하며\
  끊임없이 성장하는 개발자가 되기 위해 노력하고 있습니다.",
  info: [
    {
      fieldName: "이름:",  //name
      fieldValue: " 최도현",
    },
    {
      fieldName: "휴대폰:", // Phone
      fieldValue: " (+82) 10 8947 9352",
    },
    {
      fieldName: "경험:", //Experience
      fieldValue: " 5+ 개월",  // 5months
    },
    {
      fieldName: "GitHub:",
      fieldValue: "github.com/BrightLuminate",
    },
    {
      fieldName: "국적:",  //Nationality
      fieldValue: " 대한민국",
    },
    {
      fieldName: "이메일:",        //Email
      fieldValue: " grace71394@gmail.com",
    },
    {
      fieldName: "프리랜서:",        //Freelance
      fieldValue: " 판소리, 영상편집 ",
    },
    {
      fieldName: "언어:",        //Languages
      fieldValue: " English, Korean",
    },
    {
      fieldName: "학교:",        //Languages
      fieldValue: "명지대학교(음악과)",
    },
    {
      fieldName: "수상:",        //Languages
      fieldValue: "정읍 전국 국악대회 장관상",
    },
  ]
};

// experience data
const experiences = {
  icon: '/assets/resume/badge.svg',
  tilte: '경험', //My experience
  description: 
    "다양한 경험을 통해 쌓아온 전문성과 열정을 바탕으로, 창의적이고 혁신적인 솔루션을 제공하며\
    끊임없이 성장하는 개발자가 되기 위해 노력하고 있습니다.",
  items: [
    {
      company: "SW엔지니어링", //ApplicationSW Engineering
      position: "AI (인공지능) SW 풀스택 & 개발자 과정", //Artificial Intelligence (AI) SW Full-Stack Developer
      duration: "2024-03-07 - 2024-09-02" //2024 - prsent
    },
    {
      company: "SW엔지니어링", //ApplicationSW Engineering
      position: "Github 활용 프로그래밍 & 개발자 향상 과정", //Programming with GithubDeveloper Enhancement Course
      duration: "2024-02-13 - 2024-02-24" //2024 - prsent
    },
    {
      company: "사무행정", //Office Administration
      position: "컴퓨터활용능력1급 과정", //Computer Literacy Level 1 Course
      duration: "2022-05-09 - 2022-06-10" //2024 - Past
    }, 
    {
      company: "영상편집 모션그래픽", //Video Editing Motion Graphics
      position: "디지털 영상기술 전문인력 & 양성 과정", //Digital Imaging Technology Specialist Training Program
      duration: "2021-06-28 - 2021-10-08" //2024 - Past
    },
    {
      company: "", 
      position: "", 
      duration: ""
    },
    {
      company: "", 
      position: "", 
      duration: "" 
    },
  ],
};

// eduction data
const eduction = {
  icon: '/assets/resume/cap.svg',
  tilte: '교육', //My education
  description: 
    "다양한 경험을 통해 쌓아온 전문성과 열정을 바탕으로, 창의적이고 혁신적인 솔루션을 제공하며\
     끊임없이 성장하는 개발자가 되기 위해 노력하고 있습니다.",
  items: [
    {
      insitution: "", //Online Course Platform 온라인 코스 플랫폼
      degree: "", //풀 스택 웹 개발 부트캠프  Full-stack web development bootcamp
      duration: "",//2023
    },
    {
      insitution: "", //코드 아카데미 Codecademy
      degree: "", //프런트엔드 트랙 Front-end Track
      duration: "", //2022
    },
    {
      insitution: "", //Online Course 온라인 코스
      degree: "", //프로그래밍 과정 Programming Course
      duration: "", //2022
    },
    {
      insitution: "", //기술 연구소 Tech Institute
      degree: "", //공인 웹 개발자 Certified Web Developer
      duration: "", //2022
    },
    {
      insitution: "", //디자인 학교 Design School
      degree: "", //그래픽 디자인 디플로마 Diploma in Graphic Design
      duration: "", //2022
    }, // 경험 교육 기술 대해서 학교 공모전 판소리 상장 
    {
      insitution: "", //디자인 학교 Design School
      degree: "", //그래픽 디자인 디플로마 Diploma in Graphic Design
      duration: "", //2022
    }, // 경험 교육 기술 대해서 학교 공모전 판소리 상장 
  ],
};

// skills data
const skills =  {
  title: "기술",   //My skills
  description:
  "다양한 경험을 통해 쌓아온 전문성과 열정을 바탕으로, 창의적이고 혁신적인 솔루션을 제공하며\
  끊임없이 성장하는 개발자가 되기 위해 노력하고 있습니다.",
  skillList: [
    {
      icon: <FaPython/>,
      name: "Python",
    },
    {
      icon: <FaJava/>,
      name: "Java",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "javascript",
    },
    {
      icon: <FaReact/>,
      name: "react.js",
    },
    {
      icon: <FaFlask/>,
      name: "Flask",
    },
    {
      icon: <FaNode/>,
      name: "node",
    },
    {
      icon: <SiAdobepremierepro />,
      name: "Premiere Pro",
    },
    {
      icon: <SiAdobeaftereffects />,
      name: "After Effects",
    },
    {
      icon: <FaMeta/>,
      name: "Meta",
    },
    {
      icon: <SiOpencv />,
      name: "opencv",
    },
    {
      icon: <SiCssmodules />,
      name: "modules",
    },
      {
      icon: <SiSpring />,
      name: "sping",
    },
    {
      icon: <BiLogoGithub/>,
      name: "GitHub",
    },
    {
      icon: <BiLogoGit />,
      name: "Git",
    },
    //SiTailwindcss tailwind.css , //FaFigam
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion  } from "framer-motion";



const Resume = () => {
    return (
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
       }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
       <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
       >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 
        gap-6">
          <TabsTrigger value="experience">경험</TabsTrigger>  {/*Experience*/}
          <TabsTrigger value="education">교육</TabsTrigger>    {/*Education*/}
          <TabsTrigger value="skills">기술</TabsTrigger>  {/*Skills*/}
          <TabsTrigger value="about">내소개</TabsTrigger>  {/*Aboutme*/}
        </TabsList>

        {/* content */}
        <div className="min-h-[70vh] w-full">
        {/* experience  */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experiences.tilte}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experiences.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experiences.items.map((item, index) =>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                         flex flex-col justify-center items-center lg:items-start  
                         gap-1"
                        > 
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full
                            bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* education  */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{eduction.tilte}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {eduction.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {eduction.items.map((item, index) =>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                         flex flex-col justify-center items-center lg:items-start  
                         gap-1"
                        > 
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full
                            bg-accent"></span>
                            <p className="text-white/60">{item.insitution}</p>
                          </div>
                        </li>
                      );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>


          {/* skills  */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=>{
                    return  <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329]
                            rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent
                              transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>;
                  })}
              </ul>  
            </div>                              
          </TabsContent>
          
          {/* about  */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.
              description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
              mx-auto xl:mx-0">
                {about.info.map((item,index) =>{
                  return (
                    <li key={index} className="flex items-center justify-center
                    xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>


        </div>
       </Tabs>
      </div>
    </motion.div>
  );
};
  
  export default Resume;