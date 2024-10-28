import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import companies from '../data/companies.json';
import faqs from '../data/faq';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-20 sm:py-20'>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 space-y-10"> {/* Added space-y-10 */}
        
        <section className='text-center'>
          <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>
            Find your dream Job{" "}
            <span className='flex items-center gap-2 sm:gap-6'>
              and get{" "}
              <img src="/logo.png" alt="Hirrd logo" className='h-14 sm:h-24 lg:h-32' />
            </span>
          </h1>
          <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
            Explore thousands of job listings or find the perfect candidate
          </p>
        </section>
        
        <div className='flex gap-6 justify-center mt-8'>
          <Link to="/jobs">
            <Button variant="blue" size="xl">Find Jobs</Button>
          </Link>
          <Link to="/post-job">
            <Button size="xl" variant="destructive">Post a Job</Button>
          </Link>
        </div>

        <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-10">
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies && companies.length > 0 ? (
              companies.map(({ name, id, path }) => (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img src={path} alt={name} className='h-9 sm:h-14 object-contain' />
                </CarouselItem>
              ))
            ) : (
              <p>No companies available</p>
            )}
          </CarouselContent>
        </Carousel>

        <img src="/banner.jpeg" alt="Job listings banner" className='w-full' />

        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Card>
            <CardHeader>
              <CardTitle>For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
              Search and apply for Jobs, track applications, and more.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              Post Jobs, manage applications, and find the best candidates.
            </CardContent>
          </Card>
        </section>

        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
};

export default LandingPage;
