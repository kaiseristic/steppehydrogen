import type {Data} from '@puckeditor/core';
import type {PortfolioComponents} from './config';
import {initialPortfolioData} from './initialData';

export const PUCK_STORAGE_KEY = 'portfolio_customizer_template_data';

export function getStoredPortfolioData(): Data<PortfolioComponents> {
  if (typeof window === 'undefined') {
    return initialPortfolioData;
  }

  try {
    const raw = window.localStorage.getItem(PUCK_STORAGE_KEY);
    if (!raw) return initialPortfolioData;
    const parsed = JSON.parse(raw) as Data<PortfolioComponents>;
    if (parsed && Array.isArray(parsed.content)) {
      return parsed;
    }
  } catch (err) {
    console.warn('Failed to parse portfolio customizer data from storage', err);
  }

  return initialPortfolioData;
}

export function saveStoredPortfolioData(data: Data<PortfolioComponents>): boolean {
  if (typeof window === 'undefined') return false;

  try {
    window.localStorage.setItem(PUCK_STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(
      new CustomEvent('portfolio_customizer_updated', {detail: data}),
    );
    return true;
  } catch (err) {
    console.error('Failed to save portfolio customizer data to storage', err);
    return false;
  }
}

export function resetStoredPortfolioData(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(PUCK_STORAGE_KEY);
    window.dispatchEvent(
      new CustomEvent('portfolio_customizer_updated', {
        detail: initialPortfolioData,
      }),
    );
  } catch (err) {
    console.error('Failed to reset portfolio customizer data', err);
  }
}
