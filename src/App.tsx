import { useState } from 'react';
import { Content } from './Content';
import { Header } from './Header';

function App() {
  const [activeSection, setActiveSection] = useState('');
  return (
    <div className="text-slate-400 relative leading-relaxed antialiased selection:bg-blue-600 selection:text-blue-200">
      <div className="bg-gradient-to-b from-slate-900 to-slate-700">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header activeSection={activeSection} />
            <Content setActiveSection={setActiveSection} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
