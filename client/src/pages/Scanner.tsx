import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, X, Sparkles, TrendingUp, DollarSign, Tag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ScanResult {
  brand: string;
  category: string;
  valueMin: number;
  valueMax: number;
  condition: string;
  trendStatus: "hot" | "steady" | "rare";
  confidence: number;
}

export default function Scanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const mockScanResults: ScanResult[] = [
    {
      brand: "Lululemon",
      category: "Align Leggings",
      valueMin: 45,
      valueMax: 75,
      condition: "Excellent",
      trendStatus: "hot",
      confidence: 95
    },
    {
      brand: "Kate Spade",
      category: "Crossbody Bag",
      valueMin: 85,
      valueMax: 140,
      condition: "Good",
      trendStatus: "steady",
      confidence: 92
    },
    {
      brand: "Vintage Nike",
      category: "Windbreaker",
      valueMin: 60,
      valueMax: 120,
      condition: "Excellent",
      trendStatus: "rare",
      confidence: 88
    },
    {
      brand: "Free People",
      category: "Boho Dress",
      valueMin: 35,
      valueMax: 65,
      condition: "Good",
      trendStatus: "steady",
      confidence: 90
    }
  ];

  const handleScan = () => {
    setIsScanning(true);
    setShowCamera(false);
    
    // Simulate AI processing
    setTimeout(() => {
      const randomResult = mockScanResults[Math.floor(Math.random() * mockScanResults.length)];
      setScanResult(randomResult);
      setIsScanning(false);
      toast.success("✨ Found it! Here's what we know...");
    }, 2000);
  };

  const handleUpload = () => {
    toast.info("Upload feature coming soon!");
  };

  const handleReset = () => {
    setScanResult(null);
    setShowCamera(false);
  };

  const getTrendBadge = (status: string) => {
    switch (status) {
      case "hot":
        return <Badge className="bg-accent text-accent-foreground">🔥 Trending Now</Badge>;
      case "rare":
        return <Badge className="bg-chart-3 text-white">💎 Rare Find</Badge>;
      default:
        return <Badge variant="secondary">⭐ Steady Seller</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <h1 className="font-heading font-bold text-xl text-foreground">AI Scanner</h1>
            {scanResult && (
              <Button variant="ghost" size="sm" onClick={handleReset}>
                <X className="h-4 w-4 mr-2" />
                Reset
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container py-6 space-y-6">
        {/* Scanner Interface */}
        {!scanResult && (
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/4] bg-muted relative flex items-center justify-center">
                {showCamera ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <Camera className="h-16 w-16 mx-auto text-primary animate-pulse" />
                      <p className="text-foreground font-medium">Position item in frame</p>
                      <div className="border-2 border-primary border-dashed rounded-xl w-64 h-64 mx-auto"></div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6 p-8">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Sparkles className="h-10 w-10 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="font-heading font-semibold text-2xl text-foreground">
                        Ready to Find Gold?
                      </h2>
                      <p className="text-muted-foreground max-w-sm mx-auto">
                        Snap a photo of any clothing item or accessory to identify the brand and estimate its value
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="p-6 space-y-3">
                {!showCamera ? (
                  <>
                    <Button 
                      size="lg" 
                      className="w-full font-heading font-semibold"
                      onClick={() => setShowCamera(true)}
                    >
                      <Camera className="mr-2 h-5 w-5" />
                      Open Camera
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full font-heading font-semibold"
                      onClick={handleUpload}
                    >
                      <Upload className="mr-2 h-5 w-5" />
                      Upload Photo
                    </Button>
                  </>
                ) : (
                  <Button 
                    size="lg" 
                    className="w-full font-heading font-semibold"
                    onClick={handleScan}
                    disabled={isScanning}
                  >
                    {isScanning ? (
                      <>
                        <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Camera className="mr-2 h-5 w-5" />
                        Capture
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Scan Result */}
        {scanResult && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Result Image Placeholder */}
            <Card>
              <CardContent className="p-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Tag className="h-16 w-16 text-primary" />
                </div>
              </CardContent>
            </Card>

            {/* Brand & Category */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h2 className="font-heading font-bold text-3xl text-foreground">
                      {scanResult.brand}
                    </h2>
                    <p className="text-lg text-muted-foreground">{scanResult.category}</p>
                  </div>
                  {getTrendBadge(scanResult.trendStatus)}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4" />
                  <span>{scanResult.confidence}% confidence</span>
                </div>
              </CardContent>
            </Card>

            {/* Value Estimation */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  Estimated Resale Value
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-4xl text-primary">
                    ${scanResult.valueMin} - ${scanResult.valueMax}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on recent sold listings across major resale platforms
                </p>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center space-y-2">
                  <div className="text-sm text-muted-foreground">Condition</div>
                  <div className="font-heading font-semibold text-lg text-foreground">
                    {scanResult.condition}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center space-y-2">
                  <div className="text-sm text-muted-foreground">Avg. Sale Time</div>
                  <div className="font-heading font-semibold text-lg text-foreground">
                    7-14 days
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full font-heading font-semibold">
                Add to My Inventory
              </Button>
              <Button size="lg" variant="outline" className="w-full font-heading font-semibold">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Similar Sold Items
              </Button>
            </div>

            {/* Tips */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">💡 Pro Tip:</span> Check the item carefully for any flaws or damage before purchasing. Condition greatly affects resale value!
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
