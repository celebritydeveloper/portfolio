import gamestackTexture2Large from 'assets/ronin-3.webp';
import gamestackTexture2Placeholder from 'assets/ronin-3.webp';
import gamestackTexture2 from 'assets/ronin-3.webp';
import gamestackTextureLarge from 'assets/ronin.webp';
import gamestackTexturePlaceholder from 'assets/ronin.webp';
import gamestackTexture from 'assets/ronin.webp';
import gamestackTextureLarge1 from 'assets/npm.png';
import gamestackTexturePlaceholder1 from 'assets/npm.png';
import gamestackTexture1 from 'assets/npm.png';
import sliceTextureLarge from 'assets/review.png';
import sliceTexturePlaceholder from 'assets/review.png';
import sliceTexture from 'assets/review.png';
import sprTextureLarge from 'assets/remail.png';
import sprTexturePlaceholder from 'assets/remail.png';
import sprTexture from 'assets/remail.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Frontend', 'Backend', 'Engineer', 'System Designer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Designer + Developer"
        description="Design portfolio of Saviour Essien — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Tapping into the power of AI"
        description="Built a Gmail chrome extension to help user curate AI generated content for emails"
        buttonText="View project"
        buttonLink="https://remail.ai/"
        model={{
          type: 'laptop',
          alt: 'Gmail chrome extension',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Web3 Wallet"
        description="Development for crypto tracking wallet built in React Native"
        buttonText="Visit store"
        buttonLink="https://play.google.com/store/apps/details?id=com.skymavis.genesis"
        model={{
          type: 'phone',
          alt: 'Web3 crypto wallet',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Plant a tree with reviews"
        description="Help users make sense of reviews while also helping nature by plating trees through proceeds"
        buttonText="View project"
        buttonLink="https://reviewforest.org"
        model={{
          type: 'laptop',
          alt: 'Gather reviews in one place',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />


      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Custom image rating"
        description="Help frontend developers quickly implement custom rating component in their projects"
        buttonText="View project"
        buttonLink="https://www.npmjs.com/package/image-rating-react"
        model={{
          type: 'laptop',
          alt: 'Custom Image Rating react package',
          textures: [
            {
              srcSet: [gamestackTexture1, gamestackTextureLarge1],
              placeholder: gamestackTexturePlaceholder1,
            },
          ],
        }}
      />


      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
