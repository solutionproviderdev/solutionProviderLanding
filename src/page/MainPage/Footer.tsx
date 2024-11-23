import React from "react";
import { Mail, Phone, MapPin, Linkedin, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-800 to-sky-600 rounded-t-xl bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Solution Provider</h2>
          <p className="text-sm">
            Less time, good quality, best service.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Phone className="mr-2 " size={18} />
              <a href="tel:01949654499" className="hover:underline">
                01949-654499
              </a>
            </li>
            <li className="flex items-center">
              <Mail className="mr-2" size={18} />
              <a href="mailto:info@solutionprovider.com.bd" className="hover:underline">
                info@solutionprovider.com.bd
              </a>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2" size={18} />
              <span>113/B Love Rd, Tejgaon Industrial Area, Dhaka 1208, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/company/solution-provider-bd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/solutionproviderbangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Facebook />
              </a>
            </li>
            
           </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-green-900 mt-8 pt-6 text-center text-sm">
        <hr className="p-2 font-bold md:w-96 mx-auto" />
        <p>&copy; {new Date().getFullYear()} Solution Provider. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
