
import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';
import { Professional, Tool, Page } from '../types';

// Mock Data
const MOCK_REVIEWS = [
  { id: 1, author: 'Ana Silva', rating: 5, comment: 'Excelente profissional, muito rápido e caprichoso!' },
  { id: 2, author: 'Bruno Costa', rating: 4, comment: 'Bom serviço, mas demorou um pouco para começar.' },
  { id: 3, author: 'Carla Dias', rating: 5, comment: 'Recomendo! Muito atencioso e o resultado ficou ótimo.' },
];

const MOCK_PROFESSIONALS: Professional[] = [
  { id: 1, name: 'João Pereira', specialty: 'Pedreiro', rating: 4.8, location: 'São Paulo, SP', phone: '(11) 98765-4321', isFavorite: false, imageUrl: 'https://picsum.photos/seed/joao/200', reviews: MOCK_REVIEWS },
  { id: 2, name: 'Maria Oliveira', specialty: 'Eletricista', rating: 4.9, location: 'Rio de Janeiro, RJ', phone: '(21) 91234-5678', isFavorite: true, imageUrl: 'https://picsum.photos/seed/maria/200', reviews: MOCK_REVIEWS.slice(0, 2) },
  { id: 3, name: 'Carlos Santos', specialty: 'Encanador', rating: 4.5, location: 'Belo Horizonte, MG', phone: '(31) 95555-4444', isFavorite: false, imageUrl: 'https://picsum.photos/seed/carlos/200', reviews: [MOCK_REVIEWS[1]] },
  { id: 4, name: 'Fernanda Lima', specialty: 'Pintora', rating: 4.7, location: 'São Paulo, SP', phone: '(11) 93322-1100', isFavorite: false, imageUrl: 'https://picsum.photos/seed/fernanda/200', reviews: MOCK_REVIEWS },
  { id: 5, name: 'Ricardo Alves', specialty: 'Pedreiro', rating: 4.2, location: 'Rio de Janeiro, RJ', phone: '(21) 98877-6655', isFavorite: false, imageUrl: 'https://picsum.photos/seed/ricardo/200', reviews: MOCK_REVIEWS.slice(1,2) },
];

const MOCK_TOOLS: Tool[] = [
  { id: 1, name: 'Furadeira de Impacto', pricePerDay: 50, available: true, imageUrl: 'https://picsum.photos/seed/furadeira/300/200' },
  { id: 2, name: 'Serra Circular', pricePerDay: 75, available: true, imageUrl: 'https://picsum.photos/seed/serra/300/200' },
  { id: 3, name: 'Andaimes (módulo)', pricePerDay: 120, available: false, imageUrl: 'https://picsum.photos/seed/andaime/300/200' },
  { id: 4, name: 'Betoneira 400L', pricePerDay: 150, available: true, imageUrl: 'https://picsum.photos/seed/betoneira/300/200' },
];

interface AppContextType {
  page: Page;
  setPage: (page: Page) => void;
  location: string;
  setLocation: (location: string) => void;
  professionals: Professional[];
  tools: Tool[];
  selectedProfessionalId: number | null;
  setSelectedProfessionalId: (id: number | null) => void;
  toggleFavorite: (id: number) => void;
  getSelectedProfessional: () => Professional | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [page, setPage] = useState<Page>(Page.HOME);
  const [location, setLocation] = useState<string>('');
  const [professionals, setProfessionals] = useState<Professional[]>(MOCK_PROFESSIONALS);
  const [selectedProfessionalId, setSelectedProfessionalId] = useState<number | null>(null);

  const toggleFavorite = (id: number) => {
    setProfessionals(prev =>
      prev.map(p => (p.id === id ? { ...p, isFavorite: !p.isFavorite } : p))
    );
  };
  
  const getSelectedProfessional = () => {
    return professionals.find(p => p.id === selectedProfessionalId);
  };
  
  const value = useMemo(() => ({
    page,
    setPage,
    location,
    setLocation,
    professionals,
    tools: MOCK_TOOLS,
    selectedProfessionalId,
    setSelectedProfessionalId,
    toggleFavorite,
    getSelectedProfessional,
  }), [page, location, professionals, selectedProfessionalId]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
