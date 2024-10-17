import './App.css'; // Import your CSS file for external styling
import Seniorexpert from './components/Seniorexpert';
import JobListings from './components/JobListings';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Platform from './components/Platform';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <div>
      <Seniorexpert/>
      <JobListings/>
      <BenefitsSection/>
      <TestimonialsSection/>
      <Platform/>
      <BlogSection/>
      <Footer/>
    </div>
  );
};

export default App;
