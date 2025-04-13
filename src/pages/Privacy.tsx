import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last Updated: June 1, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. Introduction</h2>
              <p>
                At Pakkit, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our website, mobile application, and delivery services 
                (collectively, the "Services").
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use our Services.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our Services, including:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> This includes information that can be used to identify you, such as your name, 
                  postal address, email address, telephone number, and payment information.
                </li>
                <li>
                  <strong>Shipping Information:</strong> When you use our delivery services, we collect information about the sender, 
                  recipient, package contents (as declared), package dimensions, and weight.
                </li>
                <li>
                  <strong>Usage Information:</strong> We collect information about how you interact with our Services, including the pages 
                  you visit, the time and date of your visits, the time spent on those pages, and other diagnostic data.
                </li>
                <li>
                  <strong>Device Information:</strong> We collect information about the device you use to access our Services, including 
                  the hardware model, operating system and version, unique device identifiers, and mobile network information.
                </li>
                <li>
                  <strong>Location Information:</strong> With your consent, we may collect precise location information from your device 
                  to provide location-based services, such as tracking package delivery.
                </li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect about you for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our Services</li>
                <li>Process and fulfill your shipping requests</li>
                <li>Track and provide updates on package delivery</li>
                <li>Communicate with you about our Services, including sending service-related notices and promotional messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                <li>Detect, prevent, and address technical issues and fraudulent activities</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>4. Disclosure of Your Information</h2>
              <p>We may disclose your personal information in the following circumstances:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and 
                  contractors who perform services on our behalf.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, 
                  your information may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid 
                  requests by public authorities.
                </li>
                <li>
                  <strong>Protection of Rights:</strong> We may disclose your information to protect the rights, property, or safety of Pakkit, 
                  our customers, or others.
                </li>
              </ul>
              
              <h2>5. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational measures to secure your personal information from accidental loss 
                and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not 
                completely secure. While we strive to protect your personal information, we cannot guarantee the security of your information 
                transmitted to our Services.
              </p>
              
              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify or update your personal information</li>
                <li>The right to erase your personal information</li>
                <li>The right to restrict or object to the processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the contact information provided at the end of this Privacy Policy.
              </p>
              
              <h2>7. Children's Privacy</h2>
              <p>
                Our Services are not intended for children under the age of 18. We do not knowingly collect personal information from children 
                under 18. If you are a parent or guardian and you believe your child has provided us with personal information, please contact 
                us so that we can take necessary actions.
              </p>
              
              <h2>8. Changes to Our Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they 
                are posted on this page.
              </p>
              
              <h2>9. Contact Information</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p>
                Email: privacy@pakkit.com<br />
                Phone: +91 9876543210<br />
                Address: Pakkit Headquarters, 123 Delivery Street, Mumbai, India
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;