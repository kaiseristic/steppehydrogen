import React from 'react';
import type {Config} from '@puckeditor/core';
import {DropZone} from '@puckeditor/core';

export type HeroSectionProps = {
  badge?: string;
  headline: string;
  tagline: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  layout: 'centered' | 'split';
  heroImage?: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
  tags?: string;
};

export type ProjectsGridProps = {
  title: string;
  subtitle?: string;
  columns: '2' | '3';
  projects: ProjectItem[];
};

export type FeaturedCaseStudyProps = {
  badge?: string;
  title: string;
  client?: string;
  role?: string;
  description: string;
  imageUrl: string;
  linkText?: string;
  linkUrl?: string;
  reverse?: 'no' | 'yes';
};

export type StatItem = {
  number: string;
  label: string;
};

export type AboutBioProps = {
  heading: string;
  bio: string;
  portraitUrl?: string;
  stats: StatItem[];
  skills?: string;
};

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
};

export type ServicesProps = {
  title: string;
  subtitle?: string;
  services: ServiceItem[];
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
};

export type TestimonialsProps = {
  title: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
};

export type GalleryItem = {
  imageUrl: string;
  caption?: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
};

export type GalleryProps = {
  title?: string;
  columns: '2' | '3' | '4';
  images: GalleryItem[];
};

export type SocialLink = {
  platform: string;
  url: string;
};

export type ContactProps = {
  badge?: string;
  headline: string;
  subheadline?: string;
  email: string;
  location?: string;
  socialLinks: SocialLink[];
};

export type ColumnsProps = {
  distribution: '50-50' | '60-40' | '40-60' | '33-67' | '67-33';
};

export type RichTextProps = {
  title?: string;
  content: string;
  align: 'left' | 'center';
  containerWidth: 'narrow' | 'standard';
};

export type SpacerProps = {
  height: number;
  showDivider: 'yes' | 'no';
};

export type PortfolioComponents = {
  HeroSection: HeroSectionProps;
  ProjectsGridSection: ProjectsGridProps;
  FeaturedCaseStudySection: FeaturedCaseStudyProps;
  AboutBioSection: AboutBioProps;
  ServicesSection: ServicesProps;
  TestimonialsSection: TestimonialsProps;
  GallerySection: GalleryProps;
  ContactSection: ContactProps;
  ColumnsSection: ColumnsProps;
  RichTextSection: RichTextProps;
  SpacerSection: SpacerProps;
};

export const portfolioConfig: Config<PortfolioComponents> = {
  root: {
    render: ({children}) => (
      <div className="portfolio-canvas-root">
        {children}
      </div>
    ),
  },
  categories: {
    hero: {
      title: 'Hero & Header',
      components: ['HeroSection'],
    },
    work: {
      title: 'Work & Projects',
      components: [
        'ProjectsGridSection',
        'FeaturedCaseStudySection',
        'GallerySection',
      ],
    },
    profile: {
      title: 'Profile & About',
      components: ['AboutBioSection', 'ServicesSection', 'TestimonialsSection'],
    },
    layout: {
      title: 'Layout & Building Blocks',
      components: [
        'ColumnsSection',
        'RichTextSection',
        'ContactSection',
        'SpacerSection',
      ],
    },
  },
  components: {
    HeroSection: {
      label: 'Hero Banner',
      fields: {
        badge: {type: 'text', label: 'Availability Badge'},
        headline: {type: 'text', label: 'Main Headline'},
        tagline: {type: 'textarea', label: 'Tagline Description'},
        layout: {
          type: 'select',
          label: 'Layout Style',
          options: [
            {label: 'Centered', value: 'centered'},
            {label: 'Split (Text + Image)', value: 'split'},
          ],
        },
        heroImage: {type: 'text', label: 'Image URL (Split layout)'},
        primaryButtonText: {type: 'text', label: 'Primary Button Label'},
        primaryButtonUrl: {type: 'text', label: 'Primary Button URL'},
        secondaryButtonText: {type: 'text', label: 'Secondary Button Label'},
        secondaryButtonUrl: {type: 'text', label: 'Secondary Button URL'},
      },
      defaultProps: {
        badge: 'Available for Select Projects & Advisory',
        headline: 'Crafting Digital Experiences That Resonate',
        tagline:
          'Senior Product & Brand Designer specializing in thoughtful interaction design, design systems, and art direction.',
        layout: 'centered',
        primaryButtonText: 'View Selected Works',
        primaryButtonUrl: '#work',
        secondaryButtonText: 'About My Process',
        secondaryButtonUrl: '#about',
      },
      render: ({
        badge,
        headline,
        tagline,
        primaryButtonText,
        primaryButtonUrl,
        secondaryButtonText,
        secondaryButtonUrl,
        layout,
        heroImage,
      }) => (
        <section className="pf-section pf-hero">
          <div className="pf-container">
            {layout === 'split' ? (
              <div className="pf-hero-split">
                <div>
                  {badge && (
                    <div className="pf-badge">
                      <span className="pf-badge-dot" />
                      {badge}
                    </div>
                  )}
                  <h1 className="pf-hero-headline">{headline}</h1>
                  <p className="pf-hero-tagline">{tagline}</p>
                  <div className="pf-hero-actions">
                    {primaryButtonText && (
                      <a
                        href={primaryButtonUrl || '#'}
                        className="pf-btn-primary"
                      >
                        {primaryButtonText}
                      </a>
                    )}
                    {secondaryButtonText && (
                      <a
                        href={secondaryButtonUrl || '#'}
                        className="pf-btn-secondary"
                      >
                        {secondaryButtonText}
                      </a>
                    )}
                  </div>
                </div>
                {heroImage && (
                  <div className="pf-portrait-wrap">
                    <img
                      src={heroImage}
                      alt={headline}
                      className="pf-portrait"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div>
                {badge && (
                  <div className="pf-badge">
                    <span className="pf-badge-dot" />
                    {badge}
                  </div>
                )}
                <h1 className="pf-hero-headline">{headline}</h1>
                <p className="pf-hero-tagline">{tagline}</p>
                <div className="pf-hero-actions">
                  {primaryButtonText && (
                    <a
                      href={primaryButtonUrl || '#'}
                      className="pf-btn-primary"
                    >
                      {primaryButtonText}
                    </a>
                  )}
                  {secondaryButtonText && (
                    <a
                      href={secondaryButtonUrl || '#'}
                      className="pf-btn-secondary"
                    >
                      {secondaryButtonText}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      ),
    },

    ProjectsGridSection: {
      label: 'Projects Grid',
      fields: {
        title: {type: 'text', label: 'Section Title'},
        subtitle: {type: 'text', label: 'Section Subtitle'},
        columns: {
          type: 'select',
          label: 'Grid Columns',
          options: [
            {label: '2 Columns', value: '2'},
            {label: '3 Columns', value: '3'},
          ],
        },
        projects: {
          type: 'array',
          label: 'Project Items',
          getItemSummary: (item) => item.title || 'Untitled Project',
          defaultItemProps: {
            title: 'Digital Workspace',
            category: 'Product Design',
            year: '2026',
            description:
              'A reimagined collaborative document tool focusing on minimal distraction.',
            imageUrl:
              'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
            linkUrl: '#',
            tags: 'UI/UX, Design System, Web',
          },
          arrayFields: {
            title: {type: 'text', label: 'Project Title'},
            category: {type: 'text', label: 'Category'},
            year: {type: 'text', label: 'Year'},
            description: {type: 'textarea', label: 'Short Description'},
            imageUrl: {type: 'text', label: 'Image URL'},
            linkUrl: {type: 'text', label: 'Case Study Link URL'},
            tags: {type: 'text', label: 'Tags (comma separated)'},
          },
        },
      },
      defaultProps: {
        title: 'Selected Works',
        subtitle:
          'Case studies spanning digital products, brand identities, and design engineering.',
        columns: '2',
        projects: [
          {
            title: 'Kroma Studio',
            category: 'Brand & Interaction',
            year: '2026',
            description:
              'Comprehensive identity and design system for a generative AI creative platform.',
            imageUrl:
              'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
            linkUrl: '#',
            tags: 'Branding, Design System, WebGL',
          },
          {
            title: 'Vesper Financial',
            category: 'Fintech UI/UX',
            year: '2025',
            description:
              'Mobile-first portfolio visualization suite for modern wealth advisors.',
            imageUrl:
              'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
            linkUrl: '#',
            tags: 'iOS, Data Viz, Mobile',
          },
        ],
      },
      render: ({title, subtitle, columns, projects = []}) => (
        <section className="pf-section" id="work" style={{padding: '64px 0'}}>
          <div className="pf-container">
            <div className="pf-section-header">
              <h2 className="pf-section-title">{title}</h2>
              {subtitle && <p className="pf-section-subtitle">{subtitle}</p>}
            </div>
            <div
              className={`pf-projects-grid ${
                columns === '3' ? 'pf-grid-cols-3' : 'pf-grid-cols-2'
              }`}
            >
              {projects.map((project, i) => {
                const tagList = project.tags
                  ? project.tags.split(',').map((t) => t.trim())
                  : [];
                return (
                  <a
                    key={i}
                    href={project.linkUrl || '#'}
                    className="pf-project-card"
                  >
                    <div className="pf-project-img-wrap">
                      <img
                        src={
                          project.imageUrl ||
                          'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
                        }
                        alt={project.title}
                        className="pf-project-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="pf-project-body">
                      <div className="pf-project-meta">
                        <span className="pf-project-cat">
                          {project.category}
                        </span>
                        <span className="pf-project-year">{project.year}</span>
                      </div>
                      <h3 className="pf-project-title">{project.title}</h3>
                      <p className="pf-project-desc">{project.description}</p>
                      {tagList.length > 0 && (
                        <div className="pf-project-tags">
                          {tagList.map((tag, tagIndex) => (
                            <span key={tagIndex} className="pf-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      ),
    },

    FeaturedCaseStudySection: {
      label: 'Featured Case Study',
      fields: {
        badge: {type: 'text', label: 'Badge Text'},
        title: {type: 'text', label: 'Project Title'},
        client: {type: 'text', label: 'Client / Company'},
        role: {type: 'text', label: 'Role / Services'},
        description: {type: 'textarea', label: 'Detailed Summary'},
        imageUrl: {type: 'text', label: 'Featured Image URL'},
        linkText: {type: 'text', label: 'Button Link Text'},
        linkUrl: {type: 'text', label: 'Button Link URL'},
        reverse: {
          type: 'select',
          label: 'Layout Direction',
          options: [
            {label: 'Image Left, Content Right', value: 'no'},
            {label: 'Content Left, Image Right', value: 'yes'},
          ],
        },
      },
      defaultProps: {
        badge: 'In-Depth Case Study',
        title: 'Architecting a Multi-Platform Design Language',
        client: 'Helix Technologies',
        role: 'Lead Product Designer & Design Architect',
        description:
          'Helped unify 12 independent enterprise products into a unified cohesive design system. Reduced engineering handoff time by 45% and improved design consistency across desktop and web clients.',
        imageUrl:
          'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1400&q=80',
        linkText: 'Read Deep Dive',
        linkUrl: '#',
        reverse: 'no',
      },
      render: ({
        badge,
        title,
        client,
        role,
        description,
        imageUrl,
        linkText,
        linkUrl,
        reverse,
      }) => (
        <section className="pf-section" style={{padding: '64px 0'}}>
          <div className="pf-container">
            <div className={`pf-case-study ${reverse === 'yes' ? 'reverse' : ''}`}>
              <div className="pf-case-study-img-wrap">
                <img
                  src={
                    imageUrl ||
                    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1400&q=80'
                  }
                  alt={title}
                  className="pf-case-study-img"
                  loading="lazy"
                />
              </div>
              <div className="pf-case-study-content">
                {badge && (
                  <div className="pf-badge" style={{marginBottom: '16px'}}>
                    {badge}
                  </div>
                )}
                <h3 className="pf-section-title" style={{fontSize: '2rem'}}>
                  {title}
                </h3>
                {(client || role) && (
                  <p
                    style={{
                      color: '#818cf8',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      marginBottom: '16px',
                    }}
                  >
                    {[client, role].filter(Boolean).join(' • ')}
                  </p>
                )}
                <p className="pf-project-desc" style={{fontSize: '1rem', marginBottom: '24px'}}>
                  {description}
                </p>
                {linkText && (
                  <a href={linkUrl || '#'} className="pf-btn-primary">
                    {linkText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ),
    },

    AboutBioSection: {
      label: 'About & Bio',
      fields: {
        heading: {type: 'text', label: 'Section Heading'},
        bio: {type: 'textarea', label: 'Biography Text'},
        portraitUrl: {type: 'text', label: 'Portrait Photo URL'},
        skills: {type: 'text', label: 'Key Skills (comma separated)'},
        stats: {
          type: 'array',
          label: 'Highlight Stats',
          getItemSummary: (item) => `${item.number} ${item.label}`,
          defaultItemProps: {
            number: '10+',
            label: 'Years of Experience',
          },
          arrayFields: {
            number: {type: 'text', label: 'Stat Number (e.g. 10+, 50M)'},
            label: {type: 'text', label: 'Stat Label'},
          },
        },
      },
      defaultProps: {
        heading: 'Crafting thoughtful digital interfaces with high attention to detail.',
        bio: 'Over the last decade, I have partnered with early-stage founders and world-class product teams to turn ambiguous problems into clear, elegant solutions. My work bridges strategy, UI/UX, and rapid code prototyping.',
        portraitUrl:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        skills:
          'Interaction Design, Design Systems, Mobile Apps, Visual Identity, Creative Direction, Prototyping',
        stats: [
          {number: '10+', label: 'Years Experience'},
          {number: '35+', label: 'Shipped Products'},
          {number: '8', label: 'Design Awards'},
        ],
      },
      render: ({heading, bio, portraitUrl, stats = [], skills}) => {
        const skillList = skills
          ? skills.split(',').map((s) => s.trim())
          : [];
        return (
          <section className="pf-section" id="about" style={{padding: '64px 0'}}>
            <div className="pf-container">
              <div className="pf-about-grid">
                {portraitUrl && (
                  <div className="pf-portrait-wrap">
                    <img
                      src={portraitUrl}
                      alt="Portrait"
                      className="pf-portrait"
                      loading="lazy"
                    />
                  </div>
                )}
                <div>
                  <h2 className="pf-section-title" style={{fontSize: '2.2rem'}}>
                    {heading}
                  </h2>
                  <p
                    style={{
                      color: 'var(--pf-text-secondary)',
                      lineHeight: '1.7',
                      fontSize: '1.05rem',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {bio}
                  </p>
                  {stats.length > 0 && (
                    <div className="pf-stats-row">
                      {stats.map((stat, idx) => (
                        <div key={idx}>
                          <div className="pf-stat-num">{stat.number}</div>
                          <div className="pf-stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {skillList.length > 0 && (
                    <div style={{marginTop: '24px'}}>
                      <div
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--pf-text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '12px',
                        }}
                      >
                        Core Competencies
                      </div>
                      <div className="pf-project-tags">
                        {skillList.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="pf-tag"
                            style={{padding: '6px 14px', fontSize: '0.85rem'}}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      },
    },

    ServicesSection: {
      label: 'Services / Offerings',
      fields: {
        title: {type: 'text', label: 'Title'},
        subtitle: {type: 'text', label: 'Subtitle'},
        services: {
          type: 'array',
          label: 'Service Cards',
          getItemSummary: (item) => item.title || 'Service',
          defaultItemProps: {
            number: '01',
            title: 'Product Strategy & Discovery',
            description:
              'Defining project roadmaps, user personas, journey mapping, and value propositions.',
          },
          arrayFields: {
            number: {type: 'text', label: 'Index / Number'},
            title: {type: 'text', label: 'Service Title'},
            description: {type: 'textarea', label: 'Description'},
          },
        },
      },
      defaultProps: {
        title: 'Areas of Focus',
        subtitle:
          'Services tailored to help startups and established brands build remarkable products.',
        services: [
          {
            number: '01',
            title: 'Product Design (UI/UX)',
            description:
              'End-to-end design for web and mobile apps, from wireframes and user testing to high-fidelity interactions.',
          },
          {
            number: '02',
            title: 'Design Systems',
            description:
              'Scalable component libraries, tokens, and documentation built for fast engineering adoption in Figma and code.',
          },
          {
            number: '03',
            title: 'Brand Identity',
            description:
              'Distinctive logos, typography, visual guidelines, and interactive digital brand assets.',
          },
        ],
      },
      render: ({title, subtitle, services = []}) => (
        <section className="pf-section" style={{padding: '64px 0'}}>
          <div className="pf-container">
            <div className="pf-section-header">
              <h2 className="pf-section-title">{title}</h2>
              {subtitle && <p className="pf-section-subtitle">{subtitle}</p>}
            </div>
            <div className="pf-services-grid">
              {services.map((item, idx) => (
                <div key={idx} className="pf-service-card">
                  <div className="pf-service-num">{item.number}</div>
                  <h3 className="pf-service-title">{item.title}</h3>
                  <p className="pf-service-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },

    TestimonialsSection: {
      label: 'Client Testimonials',
      fields: {
        title: {type: 'text', label: 'Section Title'},
        subtitle: {type: 'text', label: 'Section Subtitle'},
        testimonials: {
          type: 'array',
          label: 'Testimonials',
          getItemSummary: (item) => item.author || 'Testimonial',
          defaultItemProps: {
            quote:
              'Working together was a game changer for our product launch. Fast, thoughtful, and obsessed with quality.',
            author: 'Sarah Chen',
            role: 'Founder & CEO, Catalyst AI',
            avatarUrl:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
          },
          arrayFields: {
            quote: {type: 'textarea', label: 'Quote'},
            author: {type: 'text', label: 'Author Name'},
            role: {type: 'text', label: 'Role & Organization'},
            avatarUrl: {type: 'text', label: 'Avatar URL (optional)'},
          },
        },
      },
      defaultProps: {
        title: 'Words from Collaborators',
        subtitle: 'Feedback from founders, product leads, and engineering partners.',
        testimonials: [
          {
            quote:
              'One of the rare designers who truly understands business metrics alongside pixel precision. Delivered beyond our expectations.',
            author: 'Marcus Vance',
            role: 'VP Product, Aurora Cloud',
            avatarUrl:
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          },
          {
            quote:
              'Elevated our whole visual brand while crafting an extraordinarily intuitive web app. Our customers constantly compliment the UI.',
            author: 'Elena Rostova',
            role: 'Co-Founder, Studio Lumina',
            avatarUrl:
              'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
          },
        ],
      },
      render: ({title, subtitle, testimonials = []}) => (
        <section className="pf-section" style={{padding: '64px 0'}}>
          <div className="pf-container">
            <div className="pf-section-header text-center">
              <h2 className="pf-section-title">{title}</h2>
              {subtitle && <p className="pf-section-subtitle">{subtitle}</p>}
            </div>
            <div className="pf-services-grid">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="pf-service-card"
                  style={{display: 'flex', flexDirection: 'column'}}
                >
                  <p
                    style={{
                      fontStyle: 'italic',
                      lineHeight: '1.6',
                      color: 'var(--pf-text-primary)',
                      flexGrow: 1,
                      marginBottom: '20px',
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div
                    style={{display: 'flex', alignItems: 'center', gap: '12px'}}
                  >
                    {t.avatarUrl && (
                      <img
                        src={t.avatarUrl}
                        alt={t.author}
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                    <div>
                      <div style={{fontWeight: 700, color: '#ffffff'}}>
                        {t.author}
                      </div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--pf-text-secondary)',
                        }}
                      >
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },

    GallerySection: {
      label: 'Image Gallery',
      fields: {
        title: {type: 'text', label: 'Section Title'},
        columns: {
          type: 'select',
          label: 'Columns',
          options: [
            {label: '2 Columns', value: '2'},
            {label: '3 Columns', value: '3'},
            {label: '4 Columns', value: '4'},
          ],
        },
        images: {
          type: 'array',
          label: 'Images',
          getItemSummary: (item) => item.caption || item.imageUrl || 'Image',
          defaultItemProps: {
            imageUrl:
              'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
            caption: 'Hardware prototyping session',
            aspectRatio: 'landscape',
          },
          arrayFields: {
            imageUrl: {type: 'text', label: 'Image URL'},
            caption: {type: 'text', label: 'Caption'},
            aspectRatio: {
              type: 'select',
              label: 'Aspect Ratio',
              options: [
                {label: 'Landscape (16:9)', value: 'landscape'},
                {label: 'Portrait (3:4)', value: 'portrait'},
                {label: 'Square (1:1)', value: 'square'},
              ],
            },
          },
        },
      },
      defaultProps: {
        title: 'Explorations & Experiments',
        columns: '3',
        images: [
          {
            imageUrl:
              'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
            caption: '3D Render exploration',
            aspectRatio: 'landscape',
          },
          {
            imageUrl:
              'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
            caption: 'Generative palette',
            aspectRatio: 'landscape',
          },
          {
            imageUrl:
              'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
            caption: 'Typography study',
            aspectRatio: 'landscape',
          },
        ],
      },
      render: ({title, columns = '3', images = []}) => (
        <section className="pf-section" style={{padding: '64px 0'}}>
          <div className="pf-container">
            {title && (
              <div className="pf-section-header">
                <h2 className="pf-section-title">{title}</h2>
              </div>
            )}
            <div className={`pf-gallery-grid pf-gallery-cols-${columns}`}>
              {images.map((img, i) => (
                <div key={i} className={`pf-gallery-item ${img.aspectRatio}`}>
                  <img
                    src={img.imageUrl}
                    alt={img.caption || `Gallery ${i + 1}`}
                    className="pf-gallery-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },

    ContactSection: {
      label: 'Contact & Inquiry',
      fields: {
        badge: {type: 'text', label: 'Badge Text'},
        headline: {type: 'text', label: 'Headline'},
        subheadline: {type: 'textarea', label: 'Subheadline'},
        email: {type: 'text', label: 'Email Address'},
        location: {type: 'text', label: 'Location / Timezone'},
        socialLinks: {
          type: 'array',
          label: 'Social Profiles',
          getItemSummary: (item) => item.platform || 'Social Link',
          defaultItemProps: {
            platform: 'Twitter / X',
            url: 'https://twitter.com',
          },
          arrayFields: {
            platform: {type: 'text', label: 'Platform Name'},
            url: {type: 'text', label: 'URL'},
          },
        },
      },
      defaultProps: {
        badge: 'Get In Touch',
        headline: "Have a vision in mind? Let's build it together.",
        subheadline:
          'Open for select design leadership roles, advisory, and bespoke digital projects.',
        email: 'hello@designerportfolio.dev',
        location: 'San Francisco, CA • Available Worldwide',
        socialLinks: [
          {platform: 'Twitter / X', url: 'https://twitter.com'},
          {platform: 'LinkedIn', url: 'https://linkedin.com'},
          {platform: 'GitHub', url: 'https://github.com'},
          {platform: 'Read.cv', url: 'https://read.cv'},
        ],
      },
      render: ({
        badge,
        headline,
        subheadline,
        email,
        location,
        socialLinks = [],
      }) => (
        <section className="pf-section" id="contact" style={{padding: '72px 0'}}>
          <div className="pf-container pf-container-narrow">
            <div className="pf-contact-box">
              {badge && (
                <div className="pf-badge" style={{marginBottom: '20px'}}>
                  <span className="pf-badge-dot" />
                  {badge}
                </div>
              )}
              <h2 className="pf-contact-title">{headline}</h2>
              {subheadline && (
                <p
                  style={{
                    color: 'var(--pf-text-secondary)',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    maxWidth: '560px',
                    margin: '0 auto',
                  }}
                >
                  {subheadline}
                </p>
              )}
              {email && (
                <a href={`mailto:${email}`} className="pf-contact-email">
                  {email}
                </a>
              )}
              {location && (
                <p
                  style={{
                    color: 'var(--pf-text-muted)',
                    fontSize: '0.9rem',
                    marginBottom: '28px',
                  }}
                >
                  {location}
                </p>
              )}
              {socialLinks.length > 0 && (
                <div className="pf-social-links">
                  {socialLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-btn-secondary"
                      style={{padding: '10px 20px', fontSize: '0.85rem'}}
                    >
                      {item.platform}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ),
    },

    ColumnsSection: {
      label: '2-Column DropZone',
      fields: {
        distribution: {
          type: 'select',
          label: 'Column Width Distribution',
          options: [
            {label: '50% / 50%', value: '50-50'},
            {label: '60% / 40%', value: '60-40'},
            {label: '40% / 60%', value: '40-60'},
            {label: '33% / 67%', value: '33-67'},
            {label: '67% / 33%', value: '67-33'},
          ],
        },
      },
      defaultProps: {
        distribution: '50-50',
      },
      render: ({distribution = '50-50'}) => (
        <div className="pf-section" style={{padding: '24px 0'}}>
          <div className="pf-container">
            <div className={`pf-columns-wrap pf-cols-${distribution}`}>
              <div className="pf-col-dropzone">
                <DropZone zone="left-column" />
              </div>
              <div className="pf-col-dropzone">
                <DropZone zone="right-column" />
              </div>
            </div>
          </div>
        </div>
      ),
    },

    RichTextSection: {
      label: 'Rich Text / Content',
      fields: {
        title: {type: 'text', label: 'Heading (Optional)'},
        content: {type: 'textarea', label: 'Body Text'},
        align: {
          type: 'select',
          label: 'Text Alignment',
          options: [
            {label: 'Left', value: 'left'},
            {label: 'Centered', value: 'center'},
          ],
        },
        containerWidth: {
          type: 'select',
          label: 'Container Width',
          options: [
            {label: 'Standard', value: 'standard'},
            {label: 'Narrow / Reading', value: 'narrow'},
          ],
        },
      },
      defaultProps: {
        title: 'Design Philosophy',
        content:
          'Design is not just how it looks, but how it works at the intersection of human intuition and software capability. Every detail from type contrast to spring physics carries meaning.',
        align: 'left',
        containerWidth: 'narrow',
      },
      render: ({title, content, align = 'left', containerWidth = 'narrow'}) => (
        <section className="pf-section" style={{padding: '40px 0'}}>
          <div
            className={
              containerWidth === 'narrow'
                ? 'pf-container pf-container-narrow'
                : 'pf-container'
            }
            style={{textAlign: align}}
          >
            {title && (
              <h2 className="pf-section-title" style={{marginBottom: '16px'}}>
                {title}
              </h2>
            )}
            <p
              style={{
                color: 'var(--pf-text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                whiteSpace: 'pre-line',
              }}
            >
              {content}
            </p>
          </div>
        </section>
      ),
    },

    SpacerSection: {
      label: 'Spacer & Divider',
      fields: {
        height: {
          type: 'number',
          label: 'Height (px)',
          min: 8,
          max: 200,
          step: 8,
        },
        showDivider: {
          type: 'select',
          label: 'Show Divider Line',
          options: [
            {label: 'No', value: 'no'},
            {label: 'Yes', value: 'yes'},
          ],
        },
      },
      defaultProps: {
        height: 48,
        showDivider: 'no',
      },
      render: ({height = 48, showDivider = 'no'}) => (
        <div
          style={{
            height: `${height}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {showDivider === 'yes' && (
            <div className="pf-container" style={{width: '100%'}}>
              <div className="pf-divider" />
            </div>
          )}
        </div>
      ),
    },
  },
};
