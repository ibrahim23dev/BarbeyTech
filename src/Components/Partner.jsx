import React from "react";
import Microsoft from '../assets/Tech/microsoft.png';
import Ucb from '../assets/Tech/Ucb.png';
import Oracle from '../assets/Tech/oracle_logo.webp';
import Cisco from '../assets/Tech/ciscologo.png';
import Talitok from '../assets/Tech/talitoklogo.png';
import Dbbl from '../assets/Tech/Dbbl.png';

function PartnerSection() {
  const partners = [
    { name: "Microsoft Gold Partner", logo: Microsoft },
    { name: "SAP Gold Partner", logo: Ucb },
    { name: "Dell", logo: Oracle },
    { name: "Oracle", logo: Cisco },
    { name: "VMware", logo: Talitok },
    { name: "Fortinet", logo: Dbbl },
    { name: "Oracle", logo: Cisco },
    { name: "SAP Gold Partner", logo: Ucb },
  ];

  return (
    <section className="Partnerbg bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-semibold text-gray-800">
          Client Partners of <span className="text-purple-600">Our Company</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Collaborating with industry leaders to deliver the best solutions.
        </p>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              {/* Replacing Next.js Image component with standard img tag */}
              <img
                src={partner.logo}
                alt={partner.name}
                width={220}
                height={100}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
