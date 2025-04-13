import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            <p className="text-gray-500 mb-8">Last Updated: June 1, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Pakkit. These Terms of Service ("Terms") govern your use of our website, mobile application, 
                and delivery services (collectively, the "Services") operated by Pakkit Logistics Pvt. Ltd. ("Pakkit," "we," "us," or "our").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, 
                you may not access or use our Services.
              </p>
              
              <h2>2. Use of Services</h2>
              <p>
                Our Services are intended for individuals who are at least 18 years old or businesses legally operating in jurisdictions 
                where our Services are available. By using our Services, you represent and warrant that you meet these requirements.
              </p>
              <p>
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
              </p>
              <ul>
                <li>In any way that violates any applicable national, federal, state, local, or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
                <li>To impersonate or attempt to impersonate Pakkit, a Pakkit employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
              </ul>
              
              <h2>3. Shipping and Delivery</h2>
              <p>
                When you use our Services to ship packages, you agree to provide accurate and complete information about the sender, 
                recipient, and contents of the package. You are responsible for ensuring that the items you ship comply with our 
                prohibited items policy and all applicable laws and regulations.
              </p>
              <p>
                Delivery times provided are estimates only and are not guaranteed. Various factors may affect delivery times, 
                including weather conditions, traffic, and other circumstances beyond our control.
              </p>
              <p>
                You agree to pay all applicable fees for the Services you use, including shipping fees, surcharges, and any applicable taxes.
              </p>
              
              <h2>4. Account Registration</h2>
              <p>
                To access certain features of our Services, you may need to register for an account. You agree to provide accurate, 
                current, and complete information during the registration process and to update such information to keep it accurate, 
                current, and complete.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access our Services and for any activities or actions 
                under your password. You agree not to disclose your password to any third party.
              </p>
              
              <h2>5. Intellectual Property</h2>
              <p>
                The Services and their entire contents, features, and functionality (including but not limited to all information, 
                software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by 
                Pakkit, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade 
                secret, and other intellectual property or proprietary rights laws.
              </p>
              <p>
                These Terms permit you to use the Services for your personal, non-commercial use only. You must not reproduce, distribute, 
                modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the 
                material on our Services.
              </p>
              
              <h2>6. Limitation of Liability</h2>
              <p>
                In no event will Pakkit, its affiliates, or their licensors, service providers, employees, agents, officers, or directors 
                be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, 
                the Services, including any direct, indirect, special, incidental, consequential, or punitive damages.
              </p>
              
              <h2>7. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Pakkit, its affiliates, licensors, and service providers, and its and 
                their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from 
                and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable 
                attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
              </p>
              
              <h2>8. Changes to Terms</h2>
              <p>
                We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when 
                we post them, and apply to all access to and use of the Services thereafter.
              </p>
              <p>
                Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.
              </p>
              
              <h2>9. Governing Law</h2>
              <p>
                These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation shall 
                be governed by and construed in accordance with the laws of India, without giving effect to any choice or conflict of law 
                provision or rule.
              </p>
              
              <h2>10. Contact Information</h2>
              <p>
                Questions or comments about the Services or these Terms may be directed to us at the email address or phone number provided 
                on our website.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;