import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Marie Dupont',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Little Lemon's Bruschetta is a simply exquisite;
    perfectly combining crispy bread with the best tomatoes.`,
  },
  {
    fullName: 'Matthew Jones',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Wow that Burger was so good!
    Their combination of artisanal bread with the perfectly cooked
    meat is something special.

    `,
  },
  {
    fullName: 'Amaya Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I don't know how they did it, but that Greek Salad 
    was fascinating. Will definitely order it again, 100% recomended.`,
  },
  {
    fullName: 'Anand Kumar',
    image: customer4Image,
    rating: [1, 1, 1, 1, 1],
    says: `I don't usually like desserts, but
    that Lemon Dessert was spectacular. I will have to
    come back soon to get some more...`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
