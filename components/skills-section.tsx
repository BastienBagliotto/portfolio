"use client";

import { 
  Box, 
  Typography, 
  Link,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Rating
} from '@mui/material';
import { 
  Code, 
  Web, 
  Storage, 
  Security, 
  CloudQueue,
  BugReport,
  Architecture,
  Api,
  Extension
} from '@mui/icons-material';

interface Skill {
  name: string;
  icon: string;
  website: string;
  category?: string;
  level: number; // 1-5 scale
}

interface SkillCategory {
  title: string;
  icon: React.ReactElement;
  color: string;
  skills: Skill[];
}

export default function SkillsSection() {

  const skillCategories: SkillCategory[] = [
    {
      title: "Backend & API",
      icon: <Api />,
      color: "#2e7d32",
      skills: [
        { name: "Node.js", icon: "🟢", website: "https://nodejs.org", level: 4 },
        { name: "Express 5", icon: "🚀", website: "https://expressjs.com", level: 4 },
        { name: "REST APIs", icon: "🌐", website: "https://restfulapi.net", level: 4 },
        { name: "TypeScript (backend)", icon: "🔷", website: "https://www.typescriptlang.org", level: 4 },
        { name: "tsx", icon: "⚡", website: "https://tsx.is", level: 4 },
        { name: "Jest", icon: "🃏", website: "https://jestjs.io", level: 4 },
        { name: "ts-jest", icon: "🧪", website: "https://kulshekhar.github.io/ts-jest/", level: 4 },
        { name: "PostgreSQL", icon: "🐘", website: "https://www.postgresql.org", level: 4 },
        { name: "Drizzle ORM", icon: "🛢️", website: "https://orm.drizzle.team", level: 4 },
        { name: "Drizzle Kit", icon: "📦", website: "https://orm.drizzle.team/docs/kit-overview", level: 4 },
        { name: "JWT", icon: "🔐", website: "https://jwt.io", level: 4 },
        { name: "bcrypt", icon: "🔒", website: "https://www.npmjs.com/package/bcrypt", level: 4 },
        { name: "cookie-parser", icon: "🍪", website: "https://expressjs.com/en/resources/middleware/cookie-parser.html", level: 4 },
        { name: "CORS & rate limiting", icon: "🛡️", website: "https://expressjs.com/en/resources/middleware/cors.html", level: 4 },
        { name: "Inversify", icon: "💉", website: "https://inversify.io", level: 4 },
        { name: "Pino", icon: "🪵", website: "https://getpino.io", level: 4 },
        { name: "node-cron", icon: "⏰", website: "https://www.npmjs.com/package/node-cron", level: 4 },
        { name: "Socket.IO (server)", icon: "🔌", website: "https://socket.io", level: 4 },
      ]
    },
    {
      title: "Integrations & product domain",
      icon: <Extension />,
      color: "#00897b",
      skills: [
        { name: "OpenAI API", icon: "🤖", website: "https://platform.openai.com/docs", level: 4 },
        { name: "Google APIs", icon: "🔍", website: "https://github.com/googleapis/google-api-nodejs-client", level: 4 },
        { name: "Google Calendar", icon: "📅", website: "https://developers.google.com/calendar", level: 4 },
        { name: "whatsapp-web.js", icon: "💬", website: "https://github.com/pedroslopez/whatsapp-web.js", level: 4 },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Web />,
      color: "#1976d2",
      skills: [
        { name: "React 19", icon: "⚛️", website: "https://react.dev", level: 4 },
        { name: "Next.js 16", icon: "▲", website: "https://nextjs.org", level: 4 },
        { name: "Angular", icon: "🅰️", website: "https://angular.io", level: 5 },
        { name: "Ionic", icon: "📱", website: "https://ionicframework.com", level: 5 },
        { name: "TypeScript", icon: "🔷", website: "https://www.typescriptlang.org", level: 5 },
        { name: "JavaScript", icon: "🟨", website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", level: 5 },
        { name: "HTML/CSS", icon: "🌐", website: "https://developer.mozilla.org", level: 5 },
        { name: "Material-UI (MUI)", icon: "🎨", website: "https://mui.com", level: 4 },
        { name: "Angular Material", icon: "🎨", website: "https://material.angular.io", level: 5 },
        { name: "Emotion", icon: "💅", website: "https://emotion.sh", level: 4 },
        { name: "Radix UI", icon: "◈", website: "https://www.radix-ui.com", level: 4 },
        { name: "TailwindCSS", icon: "🎯", website: "https://tailwindcss.com", level: 4 },
        { name: "PostCSS", icon: "🔧", website: "https://postcss.org", level: 4 },
        { name: "FullCalendar", icon: "📆", website: "https://fullcalendar.io", level: 4 },
        { name: "Zustand", icon: "🐻", website: "https://github.com/pmndrs/zustand", level: 4 },
        { name: "React Hook Form", icon: "📝", website: "https://react-hook-form.com", level: 4 },
        { name: "Zod", icon: "✅", website: "https://zod.dev", level: 4 },
        { name: "Recharts", icon: "📊", website: "https://recharts.org", level: 4 },
        { name: "socket.io-client", icon: "⚡", website: "https://socket.io/docs/v4/client-api/", level: 4 },
        { name: "Progressive Web Apps (PWA)", icon: "📱", website: "https://web.dev/progressive-web-apps", level: 3 },
        { name: "State Management (NgRx)", icon: "🔄", website: "https://ngrx.io", level: 4 },
        { name: "NX", icon: "⚡", website: "https://nx.dev", level: 4 },
        { name: "RxJS", icon: "🔄", website: "https://rxjs.dev", level: 5 },
      ]
    },
    {
      title: "Testing & Quality Assurance",
      icon: <BugReport />,
      color: "#d32f2f",
      skills: [
        { name: "Cypress (E2E)", icon: "🌲", website: "https://www.cypress.io", level: 4 },
        { name: "Jasmine", icon: "🧪", website: "https://jasmine.github.io", level: 5 },
        { name: "Karma", icon: "⚡", website: "https://karma-runner.github.io", level: 5 },
        { name: "Cucumber", icon: "🥒", website: "https://cucumber.io", level: 4 },
        { name: "ESLint", icon: "🔍", website: "https://eslint.org", level: 5 }
      ]
    },
    {
      title: "Backend Development (JVM & other)",
      icon: <Code />,
      color: "#388e3c",
      skills: [
        { name: "Spring Boot", icon: "🍃", website: "https://spring.io/projects/spring-boot", level: 3 },
        { name: "Java", icon: "☕", website: "https://www.java.com", level: 4 },
        { name: "Hibernate", icon: "🔄", website: "https://hibernate.org", level: 2 },
        { name: "GraphQL", icon: "🔷", website: "https://graphql.org", level: 3 }
      ]
    },
    {
      title: "Architecture",
      icon: <Architecture />,
      color: "#7b1fa2",
      skills: [
        { name: "Microservices Architecture", icon: "🏗️", website: "https://microservices.io", level: 3 },
        { name: "Clean Architecture", icon: "🧹", website: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html", level: 4 },
        { name: "Hexagonal Architecture", icon: "🔷", website: "https://alistair.cockburn.us/hexagonal-architecture", level: 3 },
        { name: "Domain-Driven Design (DDD)", icon: "🎯", website: "https://martinfowler.com/bliki/DomainDrivenDesign.html", level: 3 }
      ]
    },
    {
      title: "Security",
      icon: <Security />,
      color: "#f57c00",
      skills: [
        { name: "OAuth2", icon: "🔑", website: "https://oauth.net/2", level: 5 }
      ]
    },
    {
      title: "Databases",
      icon: <Storage />,
      color: "#5d4037",
      skills: [
        { name: "MySQL", icon: "🐬", website: "https://www.mysql.com", level: 4 },
        { name: "MongoDB", icon: "🍃", website: "https://www.mongodb.com", level: 2 },
        { name: "Firebase", icon: "🔥", website: "https://firebase.google.com", level: 3 },
        { name: "NoSQL", icon: "📊", website: "https://www.mongodb.com/nosql-explained", level: 3 },
        { name: "ORMs", icon: "🔄", website: "https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping", level: 3 }
      ]
    },
    {
      title: "DevOps & CI/CD",
      icon: <CloudQueue />,
      color: "#0288d1",
      skills: [
        { name: "Docker", icon: "🐳", website: "https://www.docker.com", level: 5 },
        { name: "Jenkins", icon: "🔧", website: "https://www.jenkins.io", level: 3 },
        { name: "Git", icon: "📝", website: "https://git-scm.com", level: 5 },
        { name: "GitHub", icon: "🐙", website: "https://github.com", level: 5 },
        { name: "GitHub Actions", icon: "⚡", website: "https://github.com/features/actions", level: 4 },
        { name: "GitLab CI", icon: "🦊", website: "https://docs.gitlab.com/ee/ci", level: 4 },
        { name: "SonarQube", icon: "🔍", website: "https://www.sonarqube.org", level: 3 }
      ]
    }
  ];

  return (
    <Box sx={{ mt: 6, mb: 4 }}>
      <Typography 
        variant="h3" 
        component="h2" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold',
          color: 'primary.main',
          mb: 2,
          textAlign: 'center',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        Technical Skills & Expertise
      </Typography>
      
      <Typography 
        variant="h6" 
        sx={{ 
          textAlign: 'center', 
          color: 'text.secondary', 
          mb: 4,
          fontSize: { xs: '1rem', sm: '1.1rem' },
          maxWidth: '600px',
          mx: 'auto'
        }}
      >
        Comprehensive expertise across modern web technologies, frameworks, and development practices
      </Typography>
      
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'stretch'
        }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <Card 
            key={categoryIndex}
            elevation={0}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              background: `linear-gradient(135deg, ${category.color}08, ${category.color}15)`,
              border: `1px solid ${category.color}20`,
              borderRadius: 4,
              transition: { xs: 'none', sm: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' },
              position: 'relative',
              overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 20px 40px ${category.color}25`,
                  borderColor: `${category.color}40`,
                  '& .skill-chips': {
                    transform: 'scale(1.02)'
                  }
                }
              }}
            >
              <CardHeader
                sx={{ 
                  pb: 3,
                  pt: 4,
                  px: 4,
                  background: `linear-gradient(135deg, ${category.color}10, transparent)`,
                  borderBottom: `1px solid ${category.color}20`
                }}
                avatar={
                  <Avatar 
                    sx={{ 
                      bgcolor: category.color,
                      width: 64,
                      height: 64,
                      boxShadow: `0 6px 16px ${category.color}40`,
                      transition: { xs: 'none', sm: 'all 0.3s ease' }
                    }}
                  >
                    {category.icon}
                  </Avatar>
                }
                title={
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 'bold', 
                      color: category.color,
                      fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {category.title}
                  </Typography>
                }
              />
              <CardContent 
                sx={{ 
                  flexGrow: 1, 
                  pt: 3,
                  pb: 4,
                  px: 4
                }}
              >
                <Box 
                  className="skill-chips"
                  sx={{ 
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(1, minmax(0, 1fr))',
                      sm: 'repeat(3, 1fr)',
                      md: 'repeat(4, 1fr)',
                      lg: 'repeat(3, 1fr)',
                      xl: 'repeat(4, 1fr)'
                    },
                    gap: 3,
                    transition: { xs: 'none', sm: 'transform 0.3s ease' }
                  }}
                >
                  {category.skills
                    .sort((a, b) => b.level - a.level)
                    .map((skill, skillIndex) => (
                    <Link 
                      key={skillIndex}
                      href={skill.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      sx={{ 
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 4,
                        borderRadius: 4,
                        background: 'rgba(255, 255, 255, 0.85)',
                        border: `2px solid ${category.color}30`,
                        transition: { xs: 'none', sm: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' },
                        backdropFilter: 'blur(15px)',
                        cursor: 'pointer',
                        minHeight: '140px',
                        boxShadow: `0 4px 12px ${category.color}15`,
                        '@media (hover: hover) and (pointer: fine)': {
                          '&:hover': {
                            backgroundColor: `${category.color}15`,
                            borderColor: category.color,
                            transform: 'translateY(-4px) scale(1.05)',
                            boxShadow: `0 12px 24px ${category.color}25`,
                            '& .skill-logo': {
                              transform: 'scale(1.2)'
                            },
                            '& .skill-name': {
                              color: category.color,
                              fontWeight: 700
                            }
                          }
                        }
                      }}
                    >
                      <Typography
                        className="skill-name"
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                          textAlign: 'center',
                          color: 'text.primary',
                          transition: { xs: 'none', sm: 'all 0.3s ease' },
                          lineHeight: 1.3,
                          maxWidth: '100%',
                          wordBreak: 'break-word',
                          mb: 1
                        }}
                      >
                        <span style={{ fontSize: '1.2em', marginRight: '8px' }}>{skill.icon}</span>
                        {skill.name}
                      </Typography>
                      <Rating
                        value={skill.level}
                        readOnly
                        size="small"
                        sx={{
                          '& .MuiRating-icon': {
                            fontSize: { xs: '1rem', sm: '1.1rem' },
                            color: skill.level === 5 ? '#4caf50' : 
                                   skill.level === 4 ? '#4caf50' : 
                                   skill.level === 3 ? '#2196f3' : 
                                   skill.level === 2 ? '#ff9800' : '#9e9e9e'
                          }
                        }}
                      />
                    </Link>
                  ))}
                </Box>
              </CardContent>
            </Card>
        ))}
      </Box>
    </Box>
  );
}
