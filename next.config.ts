import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mui.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'material.angular.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'emotion.sh',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'postcss.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ngrx.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nx.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jasmine.github.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'karma-runner.github.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cucumber.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eslint.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'expressjs.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'spring.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hibernate.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jwt.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'oauth.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mysql.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.postgresql.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mongodb.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebase.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.docker.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.jenkins.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'git-scm.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'docs.gitlab.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.sonarqube.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
