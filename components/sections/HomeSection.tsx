import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentFavTech from '../content/CurrentFavTech';
import CurrentTimeLineExp, { calculateDuration } from '../content/CurrentTimeLineExp';
import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import { skills } from '../utils/mySkills';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';

const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />
      <div className='w-full flex flex-col items-start'>
        <AboutMe />
        <CurrentTimeLineExp />
        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Skills</h2>
          <p className='text-base text-gray-400'>
            A look at all the programming languages, libraries, and tools I've worked with. See more in my <a href="https://github.com/jeandv" target="_blank" className="hover:text-white"><u>github.com/jeandv</u></a>
          </p> 
          <div className='flex flex-col items-start gap-3 mt-3'>
            {
              skills.map(({ title, techs }) => (
                <div key={title}>
                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>{title}</h3>
                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>
                </div>
              ))
            }
          </div>
        </AnimationContainer>
        <ContactMe />
      </div>
    </SectionContainer>
  )
}

export default HomeSection;
