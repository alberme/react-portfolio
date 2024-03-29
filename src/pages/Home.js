import tw from 'tailwind-styled-components';

import { ProjectCard, TimelineCard } from 'common/components';
import { Section, Container } from 'common/styles/page';
import headshot from 'assets/bitmoji.png';
import ecardImage from 'assets/ecard.jpg';
import hauntedHouseImage from 'assets/hauntedhouse.png';
import triviaAndChillImage from 'assets/triviaAndChill.png';

const projectList = [
  [
    'Trivia & Chill',
    'Test your movie knowledge in this trivia game! Featuring a beautiful deco-art theme and challenging questions.',
    'https://luceroweb.github.io/trivia-and-chill',
    triviaAndChillImage,
  ],
  [
    'The Haunted House Game',
    'Escape the creepy haunted house in this story based game!',
    'https://luceroweb.github.io/haunted-house-game',
    hauntedHouseImage,
  ],
  [
    'E-card',
    'A reshareable digital holiday card. Customize and share with your loved ones!',
    'https://alberme.github.io/ecard/',
    ecardImage,
  ],
];

const timelineEvents = [
  {
    title: 'React Native Apprentice',
    location: 'Alpha Works - Bitwise Industries',
    date: 'Sept 2021 - current',
    description:
      'Currently working on a team to learn web and native app development using React Native, agile methodology, and GitHub Projects.',
  },
  {
    title: 'Volunteer',
    location: 'Bakersfield Marathon',
    date: 'Apr 2022',
    description:
      'Passed out water cups to runners, maintained cleanliness of the course',
  },
  {
    title: 'STEM Tutor',
    location: 'Bakersfield College',
    date: 'Sept 2017 - May 2018',
    description:
      'Tutored CS students on demand based on a data structures and computer architecture course',
  },
  {
    title: 'Supplemental Instruction Leader',
    location: 'Bakersfield College',
    date: 'Sept 2015 – May 2016',
    description:
      'Hosted regularly scheduled discussions about CS fundamentals in Java and data structures and algorithms in C++. Taught and guided students in the right direction towards success',
  },
  {
    title: 'Volunteer',
    location: 'Adventist Health',
    date: 'August 2011',
    description:
      'Assist with office chores such as organizing paperwork. Perform chores such as delivering equipment to various departments',
  },
];

const Intro = tw.div`
  max-w-[80%]
  mx-auto
  mt-4
  text-center
`;

const Avatar = tw.img`
  max-w-[12rem]
  sm:max-w-[16rem]
  object-cover
`;

export default function Home() {
  return (
    <>
      <Section>
        <Container $center>
          <Avatar src={headshot} alt='Alberts Headshot' />
          <Intro>
            <h1>Hi 👋 I'm Albert</h1>
            <p>
              I am a web and native app developer with experience across various
              modern web technologies. My expertise lies primarily in the
              Javascript ecosystem, specifically with React, React Native, and
              the MERN (MongoDB, Express, React, Node) stack
            </p>
            <p>
              I am currently in an apprenticeship program at Alpha Works Tech -
              Bitwise Industries, where I collaborate with my team or various
              teams to design, prototype, build, and deploy functional apps to
              production.
            </p>
          </Intro>
        </Container>
      </Section>
      <hr />
      <Section>
        <h2>Featured Projects</h2>
        <Container $row $center>
          {projectList.map(([title, description, link, img], i) => (
            <ProjectCard
              key={i}
              title={title}
              description={description}
              link={link}
              img={img}
            />
          ))}
        </Container>
      </Section>

      <hr />
      <Section>
        <h2>Personal Timeline</h2>
        <Container $center>
          {timelineEvents.map((event, i) => (
            <TimelineCard key={i} event={event} />
          ))}
        </Container>
      </Section>
    </>
  );
}
