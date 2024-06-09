"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link  from "next/link";
import { Description } from "@radix-ui/react-dialog";


const services = [
  {
    num: '01',
    title: '프런트 엔드 웹 개발',  // Web Development
    description: '웹사이트의 사용자 인터페이스를 개발을 하고 HTML, CSS, JavaScript 통해 사용하여 웹페이지를 구성하고 스타일링합니다.',
    href: "",
  },
  {
    num: '02',
    title: '백엔드 웹 개발자',
    description: '서버 측의 로직과 데이터베이스 관리를 담당을 하고 서버 설정, 데이터베이스을 관리, API 개발 등을 수행합니다.',
    href: "",
  },
  {
    num: '03',
    title: '인공지능',  //Artificial intelligence
    description: 'AI 및 머신 러닝 솔루션을 개발을 하고 데이터 분석, 예측 모델링, 자연어 처리 등을 통해 비즈니스 인사이트를 제공합니다.',
    href: "",
  },
  {
    num: '04',
    title: '크리에이티브 미디어',  //Creative Media
    description: '디지털 콘텐츠를 제작을 하고 그래픽 디자인, 비디오 편집, 애니메이션 제작 등을 포함합니다.',
    href: "",
  },
];

import { motion  } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
       <div className="container mx-auto">
        <motion.div 
        initial={{opacity: 0}}
        animate={{
          opacity: 1, 
          transition:{ delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=> {
            return (
              <div 
              key={index} 
              className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline
                  text-transparent group-hover:text-outline-hover transition-all
                  duration-500">
                    {service.num}
                  </div>
                  <Link 
                    href={service.href} 
                    className="w-[70px] h-[70px] rounded-full bg-white
                    group-hover:bg-accent transition-all duration-500 flex
                    justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-nono text-white
                  group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>  
            );
          })}
        </motion.div>
       </div>
     </section>
  );
};

export default Services;