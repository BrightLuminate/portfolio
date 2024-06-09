import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import  Photo  from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"> 소프트웨어 개발자</span>
            <h1 className="h1 mb-6">
              안녕하세요.저는<br /> <span className="text-accent">최도현입니다.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            저는 새로운 도전을 좋아하고 끊임없이 변화하는 기술 세계에서 배우고 성장하기 위해 항상 노력하고 있습니다. 
            또한 열린 소통과 협업을 중요 하게 생각합니다. 더 나은 세상을 만들기 위해 끊임없이 노력하는 모습 으로 
            사용자 중심의 솔루션을 제공하고 혁신적인 기술을 활용하여 새로운 가능성을 모색합니다.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
              >
                <span>Downlaod CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex 
                        justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;