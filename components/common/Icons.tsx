
import React from 'react';

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

export const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-1.344-.688 15.182 15.182 0 01-1.06-1.017c-.8-1.082-2.128-2.479-3.235-3.856C1.679 12.5 0 10.36 0 8.25 0 5.424 2.424 3 5.25 3c1.386 0 2.655.565 3.58 1.481A4.945 4.945 0 0112 3c2.826 0 5.25 2.424 5.25 5.25 0 2.11-1.68 4.25-4.88 6.843a15.18 15.18 0 01-1.06 1.017 15.247 15.247 0 01-1.344.688l-.022.012-.007.003h-.001z" />
  </svg>
);

export const HammerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.87-5.87m0 0L21 5.64a2.652 2.652 0 0 0-5.64-5.64L11.42 8.83l-5.87-5.87a2.652 2.652 0 0 0-5.64 5.64l5.87 5.87m0 0L2.89 21.11a2.652 2.652 0 0 0 5.64 5.64l5.87-5.87m0 0l-5.87 5.87" />
    </svg>
);

export const WrenchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.87-5.87m0 0L21 5.64a2.652 2.652 0 0 0-5.64-5.64L11.42 8.83l-5.87-5.87a2.652 2.652 0 0 0-5.64 5.64l5.87 5.87m0 0L2.89 21.11a2.652 2.652 0 0 0 5.64 5.64l5.87-5.87m0 0l-5.87 5.87" />
    </svg>
);

export const BellIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
);
