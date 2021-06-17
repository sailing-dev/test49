import React from 'react';

interface FAQsProps {
  className?: string;
}

const FAQs: React.FC<FAQsProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="11"
    height="16" 
    viewBox="0 0 11 16"
  >
	  <path d="M3.8853 10.6211V7.54995C6.11767 7.00837 7.23385 6.11674 7.23385 4.87507C7.23385 4.54484 7.1546 4.24763 6.99609 3.98344C6.83757 3.71926 6.61302 3.51451 6.32241 3.36921C6.03181 3.22391 5.70157 3.15125 5.33171 3.15125C4.81655 3.15125 4.35423 3.29656 3.94474 3.58716C3.54846 3.86456 3.27106 4.24763 3.11255 4.73637L0.497109 4.16177C0.615993 3.6466 0.820737 3.17767 1.11134 2.75498C1.40195 2.31907 1.7586 1.9426 2.1813 1.62558C2.60399 1.30856 3.07953 1.06419 3.6079 0.892465C4.14948 0.720744 4.73069 0.634883 5.35153 0.634883C6.03841 0.634883 6.67246 0.740558 7.25367 0.951906C7.83488 1.15005 8.33683 1.43405 8.75953 1.80391C9.19544 2.17377 9.53227 2.61628 9.77004 3.13144C10.0078 3.63339 10.1267 4.18158 10.1267 4.776C10.1267 5.43646 9.98139 6.04409 9.69078 6.59888C9.40018 7.14046 8.98409 7.6226 8.44251 8.0453C7.91413 8.45479 7.28009 8.77181 6.54037 8.99637V10.6211H3.8853ZM5.21283 15.0793C4.89581 15.0793 4.61181 15.0066 4.36083 14.8613C4.10985 14.716 3.90511 14.5179 3.7466 14.2669C3.6013 14.0027 3.52864 13.7121 3.52864 13.3951C3.52864 13.078 3.6013 12.794 3.7466 12.5431C3.90511 12.2789 4.10985 12.0741 4.36083 11.9288C4.61181 11.7835 4.89581 11.7109 5.21283 11.7109C5.52985 11.7109 5.81385 11.7835 6.06483 11.9288C6.31581 12.0741 6.51395 12.2789 6.65925 12.5431C6.81776 12.794 6.89702 13.078 6.89702 13.3951C6.89702 13.7121 6.81776 14.0027 6.65925 14.2669C6.51395 14.5179 6.31581 14.716 6.06483 14.8613C5.81385 15.0066 5.52985 15.0793 5.21283 15.0793Z" fill="white"/>
  </svg>
);

export default FAQs;
