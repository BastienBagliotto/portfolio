import { Container, Box } from '@mui/material';
import { Metadata } from 'next';
import SkillsSection from '../../components/skills-section';
import ProfileHeader from '../../components/profile-header';
import ExperienceSection from '../../components/experience-section';
import EducationSection from '../../components/education-section';
import ContactSection from '../../components/contact-section';
import ReferencesSection from '../../components/references-section';

export const metadata: Metadata = {
  title: 'Bastien Resume',
  description: 'Bastien Bagliotto - CEO & Fullstack Engineer - Angular Specialist',
};

export default function Bastien() {

  const references = [
    {
      name: 'Marc Journeux',
      title: 'CTO, Truckonline',
      phone: '+33 6 76 79 27 45',
      email: 'marc.journeux@truckonline.pro'
    },
    {
      name: 'Anthony Barna',
      title: 'Architect, Levio',
      phone: '+33 6 95 28 95 95',
      email: 'anthony@barna.cloud'
    },
    {
      name: 'Roxane Reinhard',
      title: 'External Resources & Partnerships Manager',
      phone: '+33 6 58 21 99 30',
      email: 'roxane.reinhard@theodo.com'
    },
    {
      name: 'Laëtitia Bandini',
      title: 'Head of External Resources & Partnerships',
      phone: '+33 6 20 54 47 33',
      email: 'laetitia.bandini@theodo.com'
    }
  ];

  const education = [
    {
      institution: 'Grenoble INP - ENSIMAG & PHELMA',
      period: '2017-2019 • Engineering School - SEOC (Embedded Systems and Connected Objects)',
      description: [
        'Three years of intensive study at Grenoble INP, starting at Phelma and advancing to Ensimag',
        'Specialized in the SEOC program (Embedded Systems and Connected Objects)',
        'Gained in-depth knowledge of embedded systems, software engineering, and IoT technologies',
        'Completed hands-on projects and advanced coursework in hardware and software integration',
        'Developed expertise to design and implement complex, high-performance systems',
        'Prepared for a career at the forefront of technology'
      ]
    },
    {
      institution: 'UNAL - Colombia',
      period: '2018 • International Exchange Student',
      description: [
        'Engaged in research and development projects at the National University of Colombia',
        'Immersed myself in local culture, gaining deep appreciation for its richness and diversity',
        'Developed self-reliance and adaptability in an international environment',
        'Enhanced both personal growth and professional resilience',
        'Broadened global perspective through cultural discovery and professional challenges',
        'Strengthened ability to thrive in diverse environments'
      ]
    },
    {
      institution: 'Lycée Thiers',
      period: '2014-2016 • Preparatory Class - MPSI/MP',
      description: [
        'Two years of rigorous preparatory studies in mathematics at Lycée Thiers in Marseille',
        'Developed analytical skills and intellectual discipline through intensive coursework',
        'Fostered strong foundation in mathematical concepts and critical thinking',
        'Honed technical abilities through problem-solving and methodical approaches',
        'Cultivated resilient, methodical approach to tackling complex challenges',
        'Shaped overall academic and professional growth'
      ]
    }
  ];

  const experience = [
    {
      title: 'CEO - Product & Front-End Lead Developer',
      company: 'BizHive',
      duration: 'March 2024 - Present',
      description: [
        'Coordinated the Bizhive team, including 7 people',
        'Leading the development of the front-end',
        'Oversaw the design process and managed product ownership responsibilities',
        'Drove creative strategies to ensure a seamless user experience',
        'Aligned design efforts with business objectives to achieve optimal results',
        'Managed team workflows, fostering collaboration and efficiency',
        'Delivered high-quality outcomes by balancing technical and design considerations'
      ],
      website: 'https://bizhive.pro',
      companyFolder: 'bizhive'
    },
    {
      title: 'Freelance Senior Front-end Developer',
      company: 'Akur8 - Théodo',
      duration: 'September 2024 - February 2025',
      description: [
        'Built and optimized advanced front-end features for Akur8\'s machine learning insurance pricing platform',
        'Used Angular, TypeScript, and NgRx for scalable state management',
        'Contributed to the company\'s design system, creating reusable components',
        'Enforced UI consistency across multiple teams and applications',
        'Collaborated within a complex, cross-functional team structure involving product managers, designers, data scientists, and backend engineers',
        'Worked at one of Paris\'s leading tech startups, driving high-quality front-end development and best practices in a fast-paced, innovative environment'
      ],
      website: 'https://akur8.com',
      companyFolder: 'akur8'
    },
    {
      title: 'Senior Front-end Developer',
      company: 'Ingérop - Théodo',
      duration: 'September 2024',
      description: [
        'Led a team of 2 developers to deliver a concrete front-end solution',
        'Addressed complex tile rendering and performance issues on Ingérop\'s custom mapping application',
        'Designed and implemented a Dockerized architecture, streamlining deployment and environment consistency',
        'Improved developer onboarding and coding standards, structure, and maintainability of the front-end codebase',
        'Completed significant improvements within just 4 days, significantly boosting team productivity',
        'Following the project\'s success, was entrusted to architect and build a new application from scratch',
        'Reflected Ingérop\'s strong confidence in the quality and impact of my work'
      ],
      website: 'https://ingerop.fr'
    },
    {
      title: 'CEO - CTO',
      company: 'Popoll',
      duration: '2023',
      description: [
        'Served as a Fullstack Developer, using Angular, Ionic, NoSQL, and Firebase',
        'Led the development of both frontend and backend components for a scalable mobile application',
        'Designed and implemented NoSQL database structures to optimize data management',
        'Integrated Firebase for real-time data synchronization and efficient backend services',
        'Focused on delivering a seamless user experience across all platforms',
        'Collaborated with the team to ensure the app\'s functionality, performance, and reliability'
      ],
      companyFolder: 'popoll'
    },
    {
      title: 'Angular Developer - Freelance',
      company: 'Truckonline',
      duration: '2021 - 2024',
      description: [
        'Served as a Frontend Developer at Truckonline, utilizing Angular to develop critical features',
        'Contributed to the team\'s success in becoming a European leader in the transport industry',
        'Developed an interactive map that significantly enhanced user engagement',
        'Participated in the creation of complex Angular applications',
        'Employed advanced tools such as RxJs, Nx, and Ionic',
        'Gained valuable experience in building scalable, performance-driven solutions for high-impact projects'
      ],
      website: 'https://truckonline.pro',
      companyFolder: 'truckonline'
    },
    {
      title: 'Fullstack Developer - Freelance',
      company: 'Formatio',
      duration: 'January 2021 - March 2021',
      description: [
        'Worked as a Fullstack Developer on a project in the health domain',
        'Used Node.js, Angular, PostgreSQL, and Express technologies',
        'Developed and maintained both frontend and backend components for a specialized training website for health professionals',
        'Designed and managed the PostgreSQL database to ensure efficient data handling for course content and user information',
        'Implemented server-side logic with Node.js and Express, ensuring reliable and secure application functionality',
        'Created responsive, user-friendly interfaces using Angular to enhance the learning experience',
        'Delivered a robust, scalable solution tailored to the specific needs of health professionals'
      ]
    },
    {
      title: 'Fullstack Developer',
      company: 'Sopra Stéria',
      duration: 'April 2019 - January 2020',
      description: [
        'Developed a web application for GrDF clients using PHP and Symfony',
        'Worked in Spain as part of an 8-person team, focusing on delivering client-centric solutions',
        'Fully immersed in the Scrum/Agile methodology, exploring all aspects to enhance team collaboration and project efficiency',
        'Contributed to the successful development and deployment of a high-performance web application',
        'Gained valuable experience in Agile practices and team-based software development'
      ],
      website: 'https://soprasteria.com'
    },
    {
      title: 'Fullstack Developer',
      company: 'ATOS - Internship Trainee',
      duration: 'May 2018 - July 2018',
      description: [
        'Led the development of a complete application from conception to deployment, utilizing Java',
        'Designed the application architecture, ensuring scalability and performance',
        'Managed the entire project lifecycle, from initial concept to final implementation'
      ],
      website: 'https://atos.net'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ProfileHeader
        name="Bastien"
        title="CEO & Fullstack Engineer - Angular Specialist"
        bio="CEO and Fullstack Engineer with over 6 years of experience in building scalable web and mobile applications. Currently serving as CEO and Product Lead at BizHive, where I coordinate a team of 7 people and drive front-end development initiatives. With extensive expertise in Angular, TypeScript, Node.js, and modern fullstack technologies including Firebase, Ionic, and various databases (NoSQL, PostgreSQL), I specialize in creating robust, maintainable solutions that deliver exceptional user experiences. As a diplomed engineer graduated in 2019, I bring a comprehensive understanding of both technical and business aspects to every project, enabling me to align development efforts with strategic objectives while maintaining high-quality standards."
        avatarSrc="/bastien.jpeg"
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <ContactSection 
          availabilityText="Currently serving as CEO at BizHive while open to consulting and freelance opportunities as a Lead Developer, where I can leverage my expertise in Angular, TypeScript, and team leadership to drive innovative projects and exceed client expectations."
        />

        <ExperienceSection experience={experience} />

        <EducationSection education={education} />

        <ReferencesSection references={references} />

        <SkillsSection />
      </Box>
    </Container>
  );
}