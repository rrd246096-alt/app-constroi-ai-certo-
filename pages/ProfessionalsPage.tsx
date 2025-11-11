
import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { Page } from '../types';
import ProfessionalCard from '../components/professionals/ProfessionalCard';

const ProfessionalsPage: React.FC = () => {
  const { professionals, location, setPage, setSelectedProfessionalId, toggleFavorite } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [minRating, setMinRating] = useState(0);

  const handleViewProfile = (id: number) => {
    setSelectedProfessionalId(id);
    setPage(Page.PROFILE);
  };

  const filteredProfessionals = useMemo(() => {
    return professionals.filter(p => {
      const matchesLocation = location ? p.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesSearch = searchTerm ? 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.specialty.toLowerCase().includes(searchTerm.toLowerCase()) : true;
      const matchesRating = p.rating >= minRating;
      return matchesLocation && matchesSearch && matchesRating;
    });
  }, [professionals, location, searchTerm, minRating]);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">Encontre o Profissional Certo</h2>
        <p className="mt-4 text-lg text-slate-300">
          {location ? `Mostrando profissionais em ${location}` : "Busque pelos melhores profissionais da construção civil."}
        </p>
      </div>

      {/* Filters */}
      <div className="bg-slate-800 p-6 rounded-lg mb-8 flex flex-col md:flex-row gap-4 items-center shadow-lg">
        <input
          type="text"
          placeholder="Buscar por nome ou especialidade..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow w-full p-3 rounded-md bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
        />
        <div className="flex items-center w-full md:w-auto">
            <label htmlFor="rating" className="mr-3 text-slate-300 font-medium whitespace-nowrap">Nota mínima:</label>
            <select
                id="rating"
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="p-3 rounded-md bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            >
                <option value="0">Qualquer</option>
                <option value="4">★★★★☆ & Acima</option>
                <option value="3">★★★☆☆ & Acima</option>
                <option value="2">★★☆☆☆ & Acima</option>
                <option value="1">★☆☆☆☆ & Acima</option>
            </select>
        </div>
      </div>
      
      {filteredProfessionals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProfessionals.map(prof => (
            <ProfessionalCard
              key={prof.id}
              professional={prof}
              onViewProfile={handleViewProfile}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-800 rounded-lg">
            <h3 className="text-2xl font-bold text-white">Nenhum resultado encontrado</h3>
            <p className="text-slate-400 mt-2">Tente ajustar seus filtros de busca.</p>
        </div>
      )}
    </div>
  );
};

export default ProfessionalsPage;
