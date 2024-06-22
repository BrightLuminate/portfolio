"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: '프론트엔드',
    title: 'Project 1',
    description: 
    "강아지의 관련 메신저 웹사이트를 제작하게 되었습니다.\
    로그인 회원가입 비밀번호찾기 회원목록 이용한 카톡 메신저로 다양한 강아지 친구 와 대화 할 수 있는 시스템 구축 ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "flask" },
    { name: "C 언어" }],
    image: "/assets/sos.png",
    live: "", // Add valid URL if available
    github: "", // Add valid URL if available
  },
  {
    num: '02',
    category: '프론트엔드',
    title: 'Project 1',
    description: 
    "프로젝트를 통해 Flask를 활용한 로그인 로그아웃으로 통해 영상 포트폴리오를 웹 사이트를 제작 하게 되었습니다.\
    웹 개발의 모든 과정을 직접 담당을 하며, 기획, 디자인, 콘텐츠 제작, 프론트엔드 및 백엔드 개발, 테스트, 배포까지 진행 했습니다.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "flask" }],
    image: "/assets/work/thumb4.png",
    live: "", // Add valid URL if available
    github: "", // Add valid URL if available
  },
  {
    num: '03',
    category: '프론트엔드',
    title: 'Project 2',
    description: 
    "TaskMaster는 직관적이고 사용자 친화적인 인터페이스를 제공하여 할 일을 추가, 삭제, 수정, 완료 표시할 수 있도록 돕습니다.\
    또한 우선순위 설정, 기한 설정, 카테고리 분류 등의 기능을 통해 사용자가 맞춤형 할 일 관리가 가능합니다.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb5.png",
    live: "", // Add valid URL if available
    github: "", // Add valid URL if available
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;
    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Project description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <TooltipProvider delayDuration={100}>
                  <Link href={project.live || "#"} target={project.live ? "_blank" : "_self"}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>라이브 프로젝트</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                </TooltipProvider>

                {/* GitHub project button */}
                <TooltipProvider delayDuration={100}>
                  <Link href={"https://github.com/BrightLuminate?tab=repositories"} target="_blank">
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>깃허브 리포지토리</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image}
                        fill 
                        className="object-cover"
                        alt={project.title} 
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
