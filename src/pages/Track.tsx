
import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TrackingForm } from '@/components/tracking/TrackingForm';
import { PackageStatus } from '@/components/tracking/PackageStatus';
import { useCourier } from '@/context/CourierContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Package, ArrowLeft, Loader2, AlertCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Track = () => {
  const { trackingNumber } = useParams<{ trackingNumber?: string }>();
  const { getPackageByTrackingNumber } = useCourier();
  const navigate = useNavigate();
  
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [inputTrackingNumber, setInputTrackingNumber] = useState('');

  useEffect(() => {
    const fetchPackageData = async () => {
      if (!trackingNumber) return;
      setLoading(true);
      setError('');
      try {
        const data = await getPackageByTrackingNumber(trackingNumber);
        if (!data) {
          setError(`No package found with tracking number: ${trackingNumber}`);
        } else {
          setPackageData(data);
        }
      } catch (err) {
        setError('Failed to retrieve package data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPackageData();
  }, [trackingNumber, getPackageByTrackingNumber]);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!inputTrackingNumber.trim()) {
      return;
    }
    navigate(`/track/${inputTrackingNumber.trim()}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {trackingNumber ? (
            <div>
              <Button 
                variant="ghost" 
                className="mb-6 hover:bg-gray-100" 
                onClick={() => navigate('/track')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tracking
              </Button>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
                <Package className="h-6 w-6 text-courier-primary" />
                <span>Package Tracking Details</span>
              </h1>
              
              {loading ? (
                <Card className="p-8 flex justify-center items-center">
                  <Loader2 className="h-8 w-8 text-courier-primary animate-spin" />
                  <p className="ml-4 text-lg">Loading package information...</p>
                </Card>
              ) : error ? (
                <Card className="p-8 border-red-200 bg-red-50">
                  <CardContent className="pt-6 flex flex-col items-center">
                    <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold text-red-700 mb-2">Tracking Error</h3>
                    <p className="text-center text-red-600">{error}</p>
                    <Button 
                      className="mt-6" 
                      variant="outline"
                      onClick={() => navigate('/track')}
                    >
                      Try Another Tracking Number
                    </Button>
                  </CardContent>
                </Card>
              ) : packageData ? (
                <PackageStatus packageData={packageData} />
              ) : null}
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">Track Your Package</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Enter your tracking number to get real-time updates on your package's location and status.
                </p>
              </div>
              
              <Card className="max-w-2xl mx-auto mb-12 shadow-md border-courier-primary/20">
                <CardContent className="pt-6">
                  <form onSubmit={handleTrackSubmit} className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        type="text"
                        placeholder="Enter your tracking number"
                        className="pl-10 py-6 text-lg"
                        value={inputTrackingNumber}
                        onChange={(e) => setInputTrackingNumber(e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="bg-courier-primary hover:bg-courier-primary/90 text-white py-6 px-8 text-lg"
                    >
                      Track Package
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="mt-16 bg-white rounded-lg shadow-sm border p-6 max-w-4xl mx-auto">
                <h2 className="text-xl font-bold mb-4">Tracking FAQs</h2>
                
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-lg text-courier-primary">How do I track my package?</h3>
                    <p className="text-gray-600 mt-2">
                      Enter your tracking number in the form above. You'll receive this number in your confirmation email when your package is shipped.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-lg text-courier-primary">Why can't I find my package?</h3>
                    <p className="text-gray-600 mt-2">
                      It may take up to 24 hours for your package to appear in our system after shipping. If you're still having trouble, please contact our customer support.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-lg text-courier-primary">How often is tracking information updated?</h3>
                    <p className="text-gray-600 mt-2">
                      Our tracking information is updated in real-time as your package moves through our network. You'll see updates whenever there's a change in your package's status.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-lg text-courier-primary">What do the different status meanings mean?</h3>
                    <p className="text-gray-600 mt-2">
                      <span className="font-medium">Pending:</span> Your package has been registered but not yet processed.<br />
                      <span className="font-medium">In Transit:</span> Your package is on its way to the destination.<br />
                      <span className="font-medium">Delivered:</span> Your package has been successfully delivered.<br />
                      <span className="font-medium">Delayed:</span> There's a delay in the delivery of your package.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Track;
