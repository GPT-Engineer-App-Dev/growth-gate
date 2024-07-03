import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log("Sign Up with email:", email);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaS Startup</h1>
        <p className="text-xl text-muted-foreground">
          Revolutionizing the way you manage your business.
        </p>
        <Button size="lg" onClick={handleSignUp}>
          Get Started
        </Button>
        <img src="/placeholder.svg" alt="Product Illustration" className="mx-auto mt-8 w-1/2" />
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Avatar src="/placeholder.svg" alt="User Photo" />
              <CardTitle>User One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"This product has changed the way I work!"</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar src="/placeholder.svg" alt="User Photo" />
              <CardTitle>User Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Incredible features and amazing support."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar src="/placeholder.svg" alt="User Photo" />
              <CardTitle>User Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"I can't imagine going back to the old way."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Start Your Free Trial</h2>
        <p className="text-xl text-muted-foreground">
          Join now and experience the future of business management.
        </p>
        <div className="flex justify-center space-x-4">
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <Button onClick={handleSignUp}>Join Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-4">
        <p>&copy; 2023 SaaS Startup. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground">Facebook</a>
          <a href="#" className="text-muted-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;