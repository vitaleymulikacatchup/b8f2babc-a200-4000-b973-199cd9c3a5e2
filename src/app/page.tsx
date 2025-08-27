"use client";

import { Carousel } from '@/components/carousels/Carousel';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import Image from 'next/image';

const heroData = { title: 'FuturistFrame', description: 'Bold, cinematic photography that captures moments.', primaryButtonText: 'View Portfolio', secondaryButtonText: 'Learn More' };

const aboutData = { description: 'I am a passionate photographer capturing the extraordinary in the everyday.' };

const portfolioItems = [
  { title: 'Nature Shot', image: '/images/forest.jpg' },
  { title: 'Cinematic Landscape', image: '/images/placeholder1.avif' },
  { title: 'Urban Exploration', image: '/images/placeholder2.avif' },
];

const processSteps = [
  { title: 'Step 1', description: 'Initial Consultation' },
  { title: 'Step 2', description: 'Photo Shoot' },
  { title: 'Step 3', description: 'Editing & Delivery' },
];

const testimonials = [
  { quote: 'An incredible experience!', author: 'Client A' },
  { quote: 'Stunning results!', author: 'Client B' }
];

const contactForm = () => (
  <form className="flex flex-col gap-4">
    <input type="text" placeholder="Name" className="border p-2" required />
    <input type="email" placeholder="Email" className="border p-2" required />
    <textarea placeholder="Your Message" className="border p-2" required></textarea>
    <button type="submit" className="bg-primary text-white p-2 rounded">Send</button>
  </form>
);

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section id="hero" className="bg-gradient-to-r from-purple-500 to-blue-500 p-20 text-white text-center">
        <SimpleHero title={heroData.title} description={heroData.description} primaryButtonText={heroData.primaryButtonText} secondaryButtonText={heroData.secondaryButtonText} />
      </section>
      <section id="about" className="bg-glass p-20 text-center">
        <MinimalAbout description={aboutData.description} />
      </section>
      <section id="portfolio" className="bg-gray-800 p-20">
        <GalleryBento items={portfolioItems} className="grid grid-cols-3 gap-4" />
      </section>
      <section id="process" className="bg-gradient-to-b from-teal-400 to-purple-400 p-20">
        <SimpleStepsBento items={processSteps} className="grid grid-cols-3 gap-4" />
      </section>
      <section id="testimonials" className="bg-pattern p-20">
        <div className="text-center">
          {testimonials.map((item, index) => (
            <blockquote key={index} className="mb-4">{item.quote} <cite>{item.author}</cite></blockquote>
          ))}
        </div>
      </section>
      <section id="contact" className="bg-gray-800 p-20 text-white">
        <h2 className="text-center text-2xl mb-4">Get In Touch</h2>
        {contactForm()}
      </section>
    </div>
  );
}
