import type {Data} from '@puckeditor/core';
import type {PortfolioComponents} from './config';

export const initialPortfolioData: Data<PortfolioComponents> = {
  content: [
    {
      type: 'HeroSection',
      props: {
        id: 'hero-1',
        badge: 'Available for Select Design Engagements 2026',
        headline: 'Crafting Minimal, High-Impact Digital Experiences',
        tagline:
          'Independent designer & creative director partnering with ambitious founders and engineering teams to turn ideas into iconic products.',
        layout: 'centered',
        primaryButtonText: 'Explore Works',
        primaryButtonUrl: '#work',
        secondaryButtonText: 'About Me',
        secondaryButtonUrl: '#about',
      },
    },
    {
      type: 'ProjectsGridSection',
      props: {
        id: 'projects-grid-1',
        title: 'Featured Projects',
        subtitle:
          'Selected systems, mobile applications, and digital identities built with precision.',
        columns: '2',
        projects: [
          {
            title: 'Kroma Studio Platform',
            category: 'Brand & Interaction Design',
            year: '2026',
            description:
              'Design systems, typography guidelines, and web application UI for an AI-assisted creative suite.',
            imageUrl:
              'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
            linkUrl: '#',
            tags: 'Design System, WebGL, Prototyping',
          },
          {
            title: 'Vesper Wealth App',
            category: 'Fintech Mobile UI',
            year: '2025',
            description:
              'Streamlined investment management app focusing on clarity, micro-interactions, and real-time portfolio tracking.',
            imageUrl:
              'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
            linkUrl: '#',
            tags: 'iOS, Data Viz, Mobile Architecture',
          },
          {
            title: 'Aura Ambient Hardware',
            category: 'Industrial & Digital Interface',
            year: '2025',
            description:
              'Companion mobile application and onboard display design for ambient home audio hardware.',
            imageUrl:
              'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
            linkUrl: '#',
            tags: 'IoT, Hardware UI, Dark Mode',
          },
          {
            title: 'Strata OS Document Engine',
            category: 'Product & Tooling',
            year: '2024',
            description:
              'Fluid canvas document editor for research teams, integrating graph visualization and markdown editing.',
            imageUrl:
              'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
            linkUrl: '#',
            tags: 'Web Application, Canvas, Typography',
          },
        ],
      },
    },
    {
      type: 'FeaturedCaseStudySection',
      props: {
        id: 'featured-case-study-1',
        badge: 'In-Depth Case Study',
        title: 'Scaling Design Across 12 Multi-Platform Products',
        client: 'Helix Technologies',
        role: 'Staff Product Designer & System Architect',
        description:
          'Unified fragmented product surfaces across Web, macOS, and iOS into a singular expressive tokenized design system. Decreased sprint implementation cycles by 40% while raising visual fidelity and accessibility compliance to WCAG AAA.',
        imageUrl:
          'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1400&q=80',
        linkText: 'Read Full Case Study',
        linkUrl: '#',
        reverse: 'no',
      },
    },
    {
      type: 'AboutBioSection',
      props: {
        id: 'about-bio-1',
        heading: 'Obsessed with simplicity, craftsmanship, and user agency.',
        bio: 'I bring 10+ years of product design experience bridging creative direction and frontend engineering. I believe software should feel weightless, responsive, and respectful of human attention.\n\nFrom early-stage 0-to-1 incubations to established design systems supporting millions of daily active users, my focus is crafting timeless digital products.',
        portraitUrl:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        skills:
          'Design Systems, Interaction Design, Figma Tokens, Prototyping, Creative Direction, Information Architecture',
        stats: [
          {number: '10+', label: 'Years in Industry'},
          {number: '40+', label: 'Shipped Products'},
          {number: '6', label: 'International Awards'},
        ],
      },
    },
    {
      type: 'ServicesSection',
      props: {
        id: 'services-1',
        title: 'Capabilities & Offerings',
        subtitle:
          'Flexible partnership models for seed-stage startups to scaling product organizations.',
        services: [
          {
            number: '01',
            title: '0 to 1 Product Concepting',
            description:
              'Rapid prototyping, interface architecture, UX flows, and interactive mockups to validate and pitch new concepts.',
          },
          {
            number: '02',
            title: 'Design System Engineering',
            description:
              'Comprehensive multi-brand tokens, accessible components, Figma libraries, and documentation handoff.',
          },
          {
            number: '03',
            title: 'Visual Identity & Art Direction',
            description:
              'Memorable brand identity, typography, 3D art direction, and launch landing pages that convert.',
          },
        ],
      },
    },
    {
      type: 'TestimonialsSection',
      props: {
        id: 'testimonials-1',
        title: 'Client Endorsements',
        subtitle: 'What founders and product leads say about our work together.',
        testimonials: [
          {
            quote:
              'One of the sharpest design partners we have ever collaborated with. Deeply analytical, yet capable of extraordinary aesthetic execution.',
            author: 'Marcus Vance',
            role: 'VP Product, Aurora Cloud',
            avatarUrl:
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          },
          {
            quote:
              'Transformed our messy MVP into an elite, consumer-grade experience. Our conversion rate doubled within three weeks of launch.',
            author: 'Elena Rostova',
            role: 'Co-Founder, Studio Lumina',
            avatarUrl:
              'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
          },
        ],
      },
    },
    {
      type: 'ContactSection',
      props: {
        id: 'contact-1',
        badge: 'Get In Touch',
        headline: "Let's create work that stands out.",
        subheadline:
          'Currently accepting commissions for select product design, system audits, and advisory roles.',
        email: 'hello@kaiserportfolio.dev',
        location: 'Available Worldwide • Remote First',
        socialLinks: [
          {platform: 'Twitter / X', url: 'https://twitter.com'},
          {platform: 'LinkedIn', url: 'https://linkedin.com'},
          {platform: 'GitHub', url: 'https://github.com'},
          {platform: 'Read.cv', url: 'https://read.cv'},
        ],
      },
    },
  ],
  root: {
    props: {
      title: 'Design Portfolio',
    },
  },
  zones: {},
};
