
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 mt-12 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} ConstróiAí. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Conectando sua obra com os melhores profissionais.</p>
      </div>
    </footer>
  );
};

export default Footer;
