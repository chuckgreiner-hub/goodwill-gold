import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, TrendingUp, Users, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Goodwill Gold" className="h-10 w-10" />
              <span className="font-heading font-bold text-xl text-foreground">Goodwill Gold</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <Button size="sm" className="font-medium">Get Started</Button>
            </nav>
            <Button size="sm" className="md:hidden font-medium">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                AI-Powered Thrift Shopping
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                Turn Thrift Into <span className="text-primary">Gold</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Your AI treasure hunter for thrift store wins. Scan items, discover values, track trends, and join a community of smart resellers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-heading font-semibold text-base">
                  Start Finding Gold
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="font-heading font-semibold text-base">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="font-heading font-bold text-2xl text-foreground">10K+</div>
                  <div className="text-sm text-muted-foreground">Brands Recognized</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-foreground">$2M+</div>
                  <div className="text-sm text-muted-foreground">Value Identified</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Finds Shared</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/hero.png" 
                alt="Goodwill Gold App" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Everything You Need to Find Gold
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Smart tools designed for thrift shoppers and resellers who want to make every find count.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">AI Scanner</h3>
                <p className="text-muted-foreground">
                  Snap a photo and instantly identify brands, estimate resale value, and see if it's trending.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Trend Tracker</h3>
                <p className="text-muted-foreground">
                  Real-time data from Poshmark, Depop, and eBay shows what's selling hot this week.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-chart-3/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-chart-3" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Community Feed</h3>
                <p className="text-muted-foreground">
                  Share your best finds, get inspired, and celebrate designer scores with fellow treasure hunters.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-chart-4/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-chart-4" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Store Map</h3>
                <p className="text-muted-foreground">
                  Save favorite stores, track visits, and leave notes like "Great for vintage denim."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              From Scan to Sale in Seconds
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered workflow makes finding valuable items effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-2xl">
                1
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">Snap Your Find</h3>
              <p className="text-muted-foreground">
                Point your camera at any clothing item or accessory while browsing the thrift store.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-2xl">
                2
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">Get Instant Value</h3>
              <p className="text-muted-foreground">
                Our AI identifies the brand and shows estimated resale value based on real marketplace data.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-chart-3/10 flex items-center justify-center text-chart-3 font-heading font-bold text-2xl">
                3
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">Buy & Resell Smart</h3>
              <p className="text-muted-foreground">
                Make confident buying decisions and list on your favorite resale platforms for profit.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <img 
              src="/scanner-demo.png" 
              alt="Scanner Demo" 
              className="mx-auto rounded-2xl shadow-2xl max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-chart-3/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
              Ready to Turn Thrift Into Gold?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join thousands of smart shoppers who are finding hidden treasures every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-heading font-semibold text-base">
                Start Scanning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="font-heading font-semibold text-base">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Goodwill Gold" className="h-8 w-8" />
                <span className="font-heading font-bold text-lg text-foreground">Goodwill Gold</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your AI treasure hunter for thrift store wins.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Goodwill Gold. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
