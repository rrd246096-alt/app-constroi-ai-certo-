
import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { Page } from '../types';
import StarRating from '../components/common/StarRating';

const ProfilePage: React.FC = () => {
  const { getSelectedProfessional, setPage } = useAppContext();
  const professional = getSelectedProfessional();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!professional) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl text-white">Profissional não encontrado.</h2>
        <button
          onClick={() => setPage(Page.PROFESSIONALS)}
          className="mt-4 bg-amber-500 text-slate-900 font-bold py-2 px-6 rounded-md hover:bg-amber-400 transition-colors"
        >
          Voltar para a busca
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <button
        onClick={() => setPage(Page.PROFESSIONALS)}
        className="mb-8 text-amber-400 hover:text-amber-300 font-semibold"
      >
        &larr; Voltar para a lista
      </button>

      <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Profile Header */}
          <div className="md:w-1/3 p-8 bg-slate-900 flex flex-col items-center justify-center text-center">
            <img 
              className="w-40 h-40 rounded-full object-cover border-4 border-amber-400 shadow-lg"
              src={professional.imageUrl}
              alt={professional.name}
            />
            <h2 className="text-3xl font-bold text-white mt-4">{professional.name}</h2>
            <p className="text-amber-400 text-lg font-semibold">{professional.specialty}</p>
            <div className="flex items-center my-2">
              <StarRating rating={professional.rating} />
              <span className="ml-2 text-slate-400">({professional.rating.toFixed(1)})</span>
            </div>
            <p className="text-slate-400 mt-2">{professional.location}</p>
            <p className="text-slate-300 mt-1">{professional.phone}</p>
            <button className="mt-6 w-full max-w-xs bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-md hover:bg-amber-400 transition-colors duration-300 shadow-lg hover:shadow-amber-500/30">
              Contratar
            </button>
          </div>

          {/* Reviews */}
          <div className="md:w-2/3 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Avaliações de Clientes</h3>
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              {professional.reviews.length > 0 ? (
                professional.reviews.map(review => (
                  <div key={review.id} className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-white">{review.author}</p>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-slate-300">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-400">Este profissional ainda não possui avaliações.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
