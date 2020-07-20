import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectImage,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectBackground,
  ProjectHeader,
} from 'components/ProjectLayout';
import backgroundSpr from 'assets/spr-background.jpg';
import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBuilder from 'assets/spr-builder.jpg';
import imageSprBuilderLarge from 'assets/spr-builder-large.jpg';
import imageSprBuilderPlaceholder from 'assets/spr-builder-placeholder.jpg';
import prerender from 'utils/prerender';
import { media } from 'utils/style';

const title = 'Designing the future of education';
const description =
  'I worked as the design lead on a major iteration of Smart Sparrow’s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.';
const roles = [
  'Art Direction',
  'UX and UI Design',
  'Front End Development',
  'Motion Design',
];

function ProjectSPR() {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet
        title={`Projects | ${title}`}
        meta={[{ name: 'description', content: description }]}
      />
      <ProjectContainer className="smart-sparrow">
        <ProjectBackground
          srcSet={`${backgroundSpr} 1000w, ${backgroundSprLarge} 1920w`}
          placeholder={backgroundSprPlaceholder}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.smartsparrow.com/aero/"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${imageSprBuilder} 800w, ${imageSprBuilderLarge} 1440w`}
              placeholder={imageSprBuilderPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionHeading>Full project coming soon...</ProjectSectionHeading>
        </ProjectSection>
        {false && (
          <ProjectSection center>
            <ProjectSectionHeading>The Challenge</ProjectSectionHeading>
            <ProjectSectionText>
              The goal of the new product design was to make creating online learning
              better for teams. As part of my role as lead product designer, I worked to
              create a consistent design system that allowed us to quickly design and
              build prototypes for user testing.
            </ProjectSectionText>
          </ProjectSection>
        )}
      </ProjectContainer>
      {false && <Footer />}
    </Fragment>
  );
}

export default ProjectSPR;