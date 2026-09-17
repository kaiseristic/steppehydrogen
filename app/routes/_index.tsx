import {useState, useEffect} from 'react';
import {Link} from 'react-router';
import type {Route} from './+types/_index';
import {Render, type Data} from '@puckeditor/core';
import {portfolioConfig, type PortfolioComponents} from '~/puck/config';
import {initialPortfolioData} from '~/puck/initialData';
import {getStoredPortfolioData} from '~/puck/storage';
import portfolioStyles from '~/styles/portfolio-sections.css?url';
import customizerStyles from '~/styles/customizer.css?url';

export const links: Route.LinksFunction = () => [
  {rel: 'stylesheet', href: portfolioStyles},
  {rel: 'stylesheet', href: customizerStyles},
];

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Design Portfolio & Visual Showcase'},
    {
      name: 'description',
      content:
        'Selected works, design systems, and digital product case studies.',
    },
  ];
};

export async function loader(args: Route.LoaderArgs) {
  return {};
}

export default function Homepage() {
  const [data, setData] = useState<Data<PortfolioComponents>>(initialPortfolioData);

  useEffect(() => {
    // Load persisted customizer data if client has customized it
    const stored = getStoredPortfolioData();
    setData(stored);

    // Listen to live customizer updates across tabs/windows or same session
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<Data<PortfolioComponents>>;
      if (customEvent.detail) {
        setData(customEvent.detail);
      }
    };

    window.addEventListener('portfolio_customizer_updated', handleUpdate);
    window.addEventListener('storage', () => {
      setData(getStoredPortfolioData());
    });

    return () => {
      window.removeEventListener('portfolio_customizer_updated', handleUpdate);
    };
  }, []);

  return (
    <div className="portfolio-homepage">
      {/* Visual Puck Renderer */}
      <Render config={portfolioConfig} data={data} />

      {/* Floating Theme Customizer Shortcut */}
      <Link
        to="/customizer"
        className="sc-floating-launcher"
        title="Open Drag & Drop Section Customizer"
      >
        <span className="sc-floating-icon" />
        <span>Customize Theme</span>
      </Link>
    </div>
  );
}
