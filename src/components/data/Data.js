import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrophy,
  faBriefcase,
  faHeart,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const nav = [
  {
    text: 'home',
    path: '/',
  },
  {
    text: 'about',
    path: '/about',
  },
  {
    text: 'services',
    path: '/services',
  },
  {
    text: 'blog',
    path: '/blog',
  },
  {
    text: 'pricing',
    path: '/pricing',
  },
  {
    text: 'contact',
    path: '/contact',
  },
];

export const featured = [
  {
    cover: '../images/hero/h1.png',
    name: 'Family House',
    total: '122 Property',
  },
  {
    cover: '../images/hero/h2.png',
    name: 'Villa',
    total: '125 Property',
  },
  {
    cover: '../images/hero/h3.png',
    name: 'Apartment',
    total: '300 Property',
  },
  {
    cover: '../images/hero/h4.png',
    name: 'Office & Studio',
    total: '80 Property',
  },
  {
    cover: '../images/hero/h5.png',
    name: 'Villa & Condo',
    total: '80 Property',
  },
];

export const list = [
  {
    id: 1,
    cover: '../images/list/p1.png',
    name: 'Red Carpet Real Estate',
    location: '21 Agiou Dimitriou, Thessaloniki',
    category: 'For Rent',
    price: '$2.000',
    type: 'Apartment',
  },
  {
    id: 2,
    cover: '../images/list/p2.png',
    name: 'Fairmount Properties',
    location: '21 Agiou Dimitriou, Thessaloniki',
    category: 'For Sale',
    price: '$12.000',
    type: 'Condos',
  },
  {
    id: 3,
    cover: '../images/list/p3.png',
    name: 'Herrigbone Realty',
    location: '21 Agiou Dimitriou, Thessaloniki',
    category: 'For Sale',
    price: '$18.500',
    type: 'Homes & Villas',
  },
  {
    id: 4,
    cover: '../images/list/p4.png',
    name: 'Red Carpet Real Estate',
    location: '21 Agiou Dimitriou, Thessaloniki',
    category: 'For Rent',
    price: '$2.000',
    type: 'Apartment',
  },
  {
    id: 5,
    cover: '../images/list/p5.png',
    name: 'Red Carpet Real Estate',
    location: '21 Agiou Dimitriou, Thessaloniki',
    category: 'For Rent',
    price: '$2.000',
    type: 'Apartment',
  },
  {
    id: 6,
    cover: '../images/list/p6.png',
    name: 'Red Carpet Real Estate',
    location: '21 Agiou Dimitriou, Thessaloniki',
    category: 'For Rent',
    price: '$2.000',
    type: 'Apartment',
  },
];

export const awards = [
  {
    icon: <FontAwesomeIcon icon={faTrophy} />,
    num: '32 M',
    name: 'Blue Burmin Award',
  },
  {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    num: '43 M',
    name: 'Mimo X11 Award',
  },
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    num: '50 M',
    name: 'Australian UGC Award',
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    num: '32 M',
    name: 'IITCA Green Award',
  },
];

export const location = [
  {
    id: 1,
    name: 'Toumpa, Thessaloniki',
    Villas: '12 Villas',
    Apartments: '10 Apartments',
    Offices: '08 Offices',
    cover: '../images/location/city-1.png',
  },
  {
    id: 2,
    name: 'Neapoli, Thessaloniki',
    Villas: '2 Villas',
    Apartments: '10 Apartments',
    Offices: '08 Offices',
    cover: '../images/location/city-2.png',
  },
  {
    id: 3,
    name: 'Thessaloniki, Thessaloniki',
    Villas: '22 Villas',
    Apartments: '42 Apartments',
    Offices: '25 Offices',
    cover: '../images/location/city-3.png',
  },
  {
    id: 4,
    name: 'Euosmos, Thessaloniki',
    Villas: '16 Villas',
    Apartments: '32 Apartments',
    Offices: '23 Offices',
    cover: '../images/location/city-4.png',
  },
];

export const team = [
  {
    list: '50',
    cover: '../images/customer/team-1.png',
    address: 'Thermi, Thessaloniki',
    name: 'Giorgos Papaioannou',
    icon: [
      <FontAwesomeIcon className="icon" icon={faFacebookF} />,
      <FontAwesomeIcon className="icon" icon={faLinkedin} />,
      <FontAwesomeIcon className="icon" icon={faTwitter} />,
      <FontAwesomeIcon className="icon" icon={faInstagram} />,
    ],
  },
  {
    list: '81',
    cover: '../images/customer/team-2.png',
    address: 'Thermi, Thessaloniki',
    name: 'Kostas Kosta',
    icon: [
      <FontAwesomeIcon className="icon" icon={faFacebookF} />,
      <FontAwesomeIcon className="icon" icon={faLinkedin} />,
      <FontAwesomeIcon className="icon" icon={faTwitter} />,
      <FontAwesomeIcon className="icon" icon={faInstagram} />,
    ],
  },
  {
    list: '50',
    cover: '../images/customer/team-3.png',
    address: 'Thermi, Thessaloniki',
    name: 'Giorgos Papaioannou',
    icon: [
      <FontAwesomeIcon className="icon" icon={faFacebookF} />,
      <FontAwesomeIcon className="icon" icon={faLinkedin} />,
      <FontAwesomeIcon className="icon" icon={faTwitter} />,
      <FontAwesomeIcon className="icon" icon={faInstagram} />,
    ],
  },
  {
    list: '50',
    cover: '../images/customer/team-4.png',
    address: 'Thermi, Thessaloniki',
    name: 'Giorgos Papaioannou',
    icon: [
      <FontAwesomeIcon className="icon" icon={faFacebookF} />,
      <FontAwesomeIcon className="icon" icon={faLinkedin} />,
      <FontAwesomeIcon className="icon" icon={faTwitter} />,
      <FontAwesomeIcon className="icon" icon={faInstagram} />,
    ],
  },
];

export const footer = [
  {
    title: 'LAYOUTS',
    text: [
      { list: 'Home Page' },
      { list: 'About Page' },
      { list: 'Service Page' },
      { list: 'Property Page' },
      { list: 'Contact Page' },
      { list: 'Single Blog' },
    ],
  },
  {
    title: 'ALL SECTIONS',
    text: [
      { list: 'Headers' },
      { list: 'Features' },
      { list: 'Attractive' },
      { list: 'Testimonials' },
      { list: 'Videos' },
      { list: 'Footers' },
    ],
  },
  {
    title: 'COMPANY',
    text: [
      { list: 'About' },
      { list: 'Blog' },
      { list: 'Pricing' },
      { list: 'Affiliate' },
      { list: 'Login' },
      { list: 'Chanellog' },
    ],
  },
];
