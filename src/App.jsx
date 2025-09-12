import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import RadioButton from "./components/RadioButton";
import Dropdown from "./components/Dropdown";
import ProductCard from "./components/ProductCard";
import { Heart, Star, ShoppingCart } from "lucide-react";
import "./App.css";

function App() {
  const dropdownOptions = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "fish", label: "Fish" },
  ];

  const sampleProducts = [
    {
      id: 1,
      name: "Premium Dog Food",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=center",
      price: 29.99,
      originalPrice: 39.99,
      meta: ["Adult", "Large Breed"],
      badge: "Sale",
      badgeColor: "error",
    },
    {
      id: 2,
      name: "Cat Scratching Post",
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=300&fit=crop&crop=center",
      price: 45.99,
      meta: ["Indoor", "Multi-level"],
      badge: "New",
      badgeColor: "success",
    },
  ];

  return (
    <div className="App">
      <Header cartCount={3} onJoinClick={() => console.log("Join clicked")} />

      <main className="container-custom">
        <div className="section-padding">
          {/* Component Showcase */}
          <div className="space-y-12">
            <section>
              <h2 className="text-h2 mb-8">Component Showcase</h2>

              {/* Buttons */}
              <div className="mb-12">
                <h3 className="text-h3 mb-6">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="solid" size="short">
                    Short Solid
                  </Button>
                  <Button variant="solid" size="medium">
                    Medium Solid
                  </Button>
                  <Button variant="solid" size="tall">
                    Tall Solid
                  </Button>
                  <Button variant="outline" size="medium">
                    Outline
                  </Button>
                  <Button variant="ghost" size="medium">
                    Ghost
                  </Button>
                  <Button variant="solid" size="medium" disabled>
                    Disabled
                  </Button>
                  <Button
                    variant="solid"
                    size="medium"
                    icon={<Heart size={16} />}
                  >
                    With Icon
                  </Button>
                  <Button
                    variant="solid"
                    size="medium"
                    icon={<Star size={16} />}
                    iconPosition="right"
                  >
                    Icon Right
                  </Button>
                </div>
              </div>

              {/* Selection Tools */}
              <div className="mb-12">
                <h3 className="text-h3 mb-6">Selection Tools</h3>
                <div className="space-y-4">
                  <Checkbox
                    id="checkbox1"
                    label="I agree to the terms and conditions"
                  />
                  <Checkbox
                    id="checkbox2"
                    label="Subscribe to newsletter"
                    checked
                  />
                  <Checkbox id="checkbox3" label="Disabled checkbox" disabled />

                  <div className="space-y-2">
                    <RadioButton
                      id="radio1"
                      name="pet"
                      value="dog"
                      label="Dog"
                    />
                    <RadioButton
                      id="radio2"
                      name="pet"
                      value="cat"
                      label="Cat"
                      checked
                    />
                    <RadioButton
                      id="radio3"
                      name="pet"
                      value="bird"
                      label="Bird"
                      disabled
                    />
                  </div>
                </div>
              </div>

              {/* Dropdown */}
              <div className="mb-12">
                <h3 className="text-h3 mb-6">Dropdown</h3>
                <div className="max-w-xs">
                  <Dropdown
                    options={dropdownOptions}
                    placeholder="Select a pet type"
                    onChange={(value) => console.log("Selected:", value)}
                  />
                </div>
              </div>

              {/* Product Cards */}
              <div className="mb-12">
                <h3 className="text-h3 mb-6">Product Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      {...product}
                      onClick={(id) => console.log("Product clicked:", id)}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer
        onNewsletterSubmit={(email) => console.log("Newsletter signup:", email)}
      />
    </div>
  );
}

export default App;
