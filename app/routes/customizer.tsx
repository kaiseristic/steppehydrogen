import {useEffect, useState, useCallback, type ComponentType} from 'react';
import {Link} from 'react-router';
import type {Route} from './+types/customizer';
import type {Data} from '@puckeditor/core';
import portfolioStyles from '~/styles/portfolio-sections.css?url';
import customizerStyles from '~/styles/customizer.css?url';
import puckStyles from '@puckeditor/core/puck.css?url';
import {portfolioConfig, type PortfolioComponents} from '~/puck/config';
import {
  getStoredPortfolioData,
  saveStoredPortfolioData,
  resetStoredPortfolioData,
} from '~/puck/storage';
import {initialPortfolioData} from '~/puck/initialData';

export const meta: Route.MetaFunction = () => {
  return [{title: 'Shopify Customizer | Design Portfolio'}];
};

export const links: Route.LinksFunction = () => [
  {rel: 'stylesheet', href: portfolioStyles},
  {rel: 'stylesheet', href: customizerStyles},
  {rel: 'stylesheet', href: puckStyles},
];

export default function CustomizerRoute() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<Data<PortfolioComponents>>(initialPortfolioData);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'unsaved' | 'saving'>('saved');
  const [currentPuckData, setCurrentPuckData] = useState<Data<PortfolioComponents> | null>(null);
  const [PuckEditor, setPuckEditor] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    const stored = getStoredPortfolioData();
    setData(stored);
    setCurrentPuckData(stored);

    // Dynamically load Puck on client only to bypass SSR worker
    Promise.all([
      import('@puckeditor/core'),
      import('@puckeditor/core/puck.css'),
    ])
      .then(([puckMod]) => {
        setPuckEditor(() => puckMod.Puck);
        setMounted(true);
      })
      .catch((err) => {
        console.error('Failed to load Puck editor module', err);
      });
  }, []);

  const handlePublish = useCallback((newData: Data<PortfolioComponents>) => {
    setSaveStatus('saving');
    saveStoredPortfolioData(newData);
    setData(newData);
    setCurrentPuckData(newData);
    setTimeout(() => {
      setSaveStatus('saved');
    }, 300);
  }, []);

  const handleChange = useCallback((newData: Data<PortfolioComponents>) => {
    setCurrentPuckData(newData);
    setSaveStatus('unsaved');
  }, []);

  const handleManualSave = useCallback(() => {
    if (currentPuckData) {
      handlePublish(currentPuckData);
    }
  }, [currentPuckData, handlePublish]);

  const handleReset = useCallback(() => {
    if (
      window.confirm(
        'Reset all portfolio sections to the default Shopify theme template? Any custom section edits will be lost.',
      )
    ) {
      resetStoredPortfolioData();
      setData({...initialPortfolioData});
      setCurrentPuckData({...initialPortfolioData});
      setSaveStatus('saved');
    }
  }, []);

  if (!mounted || !PuckEditor) {
    return (
      <div className="shopify-customizer-shell">
        <div className="shopify-customizer-topbar">
          <div className="sc-topbar-left">
            <span className="sc-page-badge">Theme Customizer</span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            height: 'calc(100vh - 52px)',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '16px',
            color: '#a1a1aa',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              border: '3px solid rgba(255,255,255,0.1)',
              borderTopColor: '#22c55e',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <span>Loading Customizer Canvas...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="shopify-customizer-shell">
      {/* Shopify Admin-Style Top Bar */}
      <header className="shopify-customizer-topbar">
        <div className="sc-topbar-left">
          <Link to="/" className="sc-back-btn" title="Return to Live Portfolio">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Exit Customizer
          </Link>

          <div className="sc-page-badge">
            <span style={{color: '#9ca3af', fontWeight: 400}}>Page:</span>
            <span>Home Page (Portfolio)</span>
            <span className="sc-tag-live">Live</span>
          </div>
        </div>

        <div className="sc-topbar-center">
          <span
            style={{
              fontSize: '0.85rem',
              color: '#9ca3af',
              fontWeight: 500,
            }}
          >
            Drag & Drop Section Builder
          </span>
        </div>

        <div className="sc-topbar-right">
          <span className={`sc-status-pill ${saveStatus}`}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background:
                  saveStatus === 'saved'
                    ? '#22c55e'
                    : saveStatus === 'unsaved'
                    ? '#f59e0b'
                    : '#60a5fa',
              }}
            />
            {saveStatus === 'saved' && 'Saved'}
            {saveStatus === 'unsaved' && 'Unsaved Changes'}
            {saveStatus === 'saving' && 'Saving...'}
          </span>

          <button
            type="button"
            onClick={handleReset}
            className="sc-reset-btn"
            title="Reset to theme defaults"
          >
            Reset Default
          </button>

          <button
            type="button"
            onClick={handleManualSave}
            className="sc-publish-btn"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
            Save & Publish
          </button>
        </div>
      </header>

      {/* Puck Visual Drag & Drop Customizer */}
      <div className="shopify-customizer-body">
        <PuckEditor
          config={portfolioConfig}
          data={data}
          onPublish={handlePublish}
          onChange={handleChange}
          headerTitle="Theme Sections"
          height="100%"
          overrides={{
            headerActions: () => null,
          }}
          iframe={{
            enabled: true,
            waitForStyles: true,
          }}
        />
      </div>
    </div>
  );
}
