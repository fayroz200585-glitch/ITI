import ParentProfile from './components/UserProfile/parentprofile';
import About from './components/UserProfile/about';
import Contact from './components/UserProfile/contact';

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>My First React + Vite App 🚀</h1>
      </header>

      {/* Parent & Child Section */}
      <section style={{ marginBottom: '30px' }}>
        <ParentProfile />
      </section>

      {/* Side-by-side Section (About & Contact) */}
      <section style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <About />
        <Contact />
      </section>
    </div>
  );
}