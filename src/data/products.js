// Shared product data for both ProductCards and ProductDetail components

export const getMenProducts = () => [
  {
    id: 1,
    name: "CASHMERE SWEATER",
    category: "sweaters",
    price: 59,
    size: "m",
    color: "beige",
    image: new URL(`../assets/images/men/product-1-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(`../assets/images/men/product-1-2.jpg`, import.meta.url)
      .href,
    description:
      "Sweater made of spun cashmere wool fabric. Round neckline and long sleeves. Ribbed trims.",
    details: "Premium cashmere wool, machine washable, made in Italy",
    stock: 5,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "LINEN T-SHIRT",
    category: "tshirts",
    price: 29,
    size: "l",
    color: "brown",
    image: new URL(`../assets/images/men/product-2-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(`../assets/images/men/product-2-2.jpg`, import.meta.url)
      .href,
    description:
      "Comfortable linen t-shirt with modern fit and breathable fabric.",
    details: "100% Linen, machine washable, made in Portugal",
    stock: 8,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "PRINTED SWEATSHIRT",
    category: "sweaters",
    price: 39,
    size: "m",
    color: "blue",
    image: new URL(`../assets/images/men/product-3-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(`../assets/images/men/product-3-2.jpg`, import.meta.url)
      .href,
    description:
      "Stylish printed sweatshirt with comfortable fit and modern design.",
    details: "100% Cotton, machine washable, made in Turkey",
    stock: 6,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "OVERSIZED T-SHIRT",
    category: "tshirts",
    price: 42,
    size: "l",
    color: "yellow",
    image: new URL(`../assets/images/men/product-4-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(`../assets/images/men/product-4-2.jpg`, import.meta.url)
      .href,
    description:
      "Comfortable oversized t-shirt with relaxed fit and soft fabric.",
    details: "100% Cotton, machine washable, made in Bangladesh",
    stock: 12,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "TEXTURED SWEATER",
    category: "sweaters",
    price: 23,
    size: "xl",
    color: "brown",
    image: new URL(`../assets/images/men/product-5-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(`../assets/images/men/product-5-2.jpg`, import.meta.url)
      .href,
    description:
      "Textured knit sweater with unique pattern and comfortable fit.",
    details: "100% Wool, hand wash only, made in Scotland",
    stock: 4,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "COTTON T-SHIRT",
    category: "tshirts",
    price: 19,
    size: "s",
    color: "white",
    image: new URL(`../assets/images/men/product-6-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(`../assets/images/men/product-6-2.jpg`, import.meta.url)
      .href,
    description:
      "Classic cotton t-shirt with clean design and comfortable fit.",
    details: "100% Cotton, machine washable, made in USA",
    stock: 15,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "WOOL BLEND SWEATER",
    category: "sweaters",
    price: 45,
    size: "m",
    color: "gray",
    image: new URL(`../assets/images/men/product-7-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(`../assets/images/men/product-7-2.jpg`, import.meta.url)
      .href,
    description: "Warm wool blend sweater perfect for cold weather.",
    details: "70% Wool, 30% Acrylic, machine washable, made in Ireland",
    stock: 7,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "VINTAGE T-SHIRT",
    category: "tshirts",
    price: 35,
    size: "l",
    color: "black",
    image: new URL(`../assets/images/men/product-8-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(`../assets/images/men/product-8-2.jpg`, import.meta.url)
      .href,
    description: "Vintage-style t-shirt with retro design and soft fabric.",
    details: "100% Cotton, machine washable, made in Japan",
    stock: 9,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "CARDIGAN SWEATER",
    category: "sweaters",
    price: 55,
    size: "l",
    color: "navy",
    image: new URL(`../assets/images/men/product-9-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(`../assets/images/men/product-9-2.jpg`, import.meta.url)
      .href,
    description:
      "Classic cardigan sweater with button closure and comfortable fit.",
    details: "100% Merino Wool, hand wash only, made in New Zealand",
    stock: 3,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    name: "GRAPHIC T-SHIRT",
    category: "tshirts",
    price: 28,
    size: "m",
    color: "red",
    image: new URL(`../assets/images/men/product-10-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-10-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Bold graphic t-shirt with eye-catching design and comfortable fit.",
    details: "100% Cotton, machine washable, made in Mexico",
    stock: 11,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 11,
    name: "CASHMERE CARDIGAN",
    category: "sweaters",
    price: 89,
    size: "xl",
    color: "cream",
    image: new URL(`../assets/images/men/product-11-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-11-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Luxurious cashmere cardigan with elegant design and premium feel.",
    details: "100% Cashmere, dry clean only, made in Italy",
    stock: 2,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    name: "BASIC T-SHIRT",
    category: "tshirts",
    price: 15,
    size: "s",
    color: "green",
    image: new URL(`../assets/images/men/product-12-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-12-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Essential basic t-shirt with clean design and comfortable fit.",
    details: "100% Cotton, machine washable, made in India",
    stock: 20,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 13,
    name: "KNIT SWEATER",
    category: "sweaters",
    price: 38,
    size: "m",
    color: "purple",
    image: new URL(`../assets/images/men/product-13-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-13-2.jpg`,
      import.meta.url
    ).href,
    description: "Cozy knit sweater with modern design and comfortable fit.",
    details: "100% Acrylic, machine washable, made in China",
    stock: 8,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 14,
    name: "STRIPED T-SHIRT",
    category: "tshirts",
    price: 32,
    size: "l",
    color: "blue",
    image: new URL(`../assets/images/men/product-14-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-14-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Classic striped t-shirt with timeless design and comfortable fit.",
    details: "100% Cotton, machine washable, made in France",
    stock: 6,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 15,
    name: "HOODIE SWEATSHIRT",
    category: "sweaters",
    price: 49,
    size: "xl",
    color: "black",
    image: new URL(`../assets/images/men/product-15-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-15-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Comfortable hoodie sweatshirt with drawstring hood and kangaroo pocket.",
    details: "80% Cotton, 20% Polyester, machine washable, made in USA",
    stock: 5,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 16,
    name: "POLO T-SHIRT",
    category: "tshirts",
    price: 41,
    size: "m",
    color: "white",
    image: new URL(`../assets/images/men/product-16-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-16-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Classic polo t-shirt with collar and button placket for smart casual look.",
    details: "100% Pima Cotton, machine washable, made in Peru",
    stock: 10,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 17,
    name: "CREW NECK SWEATSHIRT",
    category: "sweaters",
    price: 39,
    size: "xl",
    color: "black",
    image: new URL(`../assets/images/men/product-17-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-17-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Crew neck sweatshirt with ribbed cuffs and hem for comfortable fit.",
    details: "100% Cotton, machine washable, made in Turkey",
    stock: 7,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 18,
    name: "TEXTURED JACQUARD T-SHIRT",
    category: "tshirts",
    price: 25,
    size: "s",
    color: "beige",
    image: new URL(`../assets/images/men/product-18-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-18-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Textured jacquard t-shirt with unique pattern and comfortable fit.",
    details: "100% Cotton, machine washable, made in Italy",
    stock: 13,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 19,
    name: "HEAT REACTIVE COLOURED SWEATSHIRT",
    category: "sweaters",
    price: 49,
    size: "m",
    color: "pink",
    image: new URL(`../assets/images/men/product-19-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-19-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Heat reactive sweatshirt that changes color with temperature.",
    details:
      "100% Cotton with heat reactive dye, machine washable, made in Japan",
    stock: 4,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 20,
    name: "RIB NECK T-SHIRT",
    category: "tshirts",
    price: 19,
    size: "l",
    color: "purple",
    image: new URL(`../assets/images/men/product-20-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-20-2.jpg`,
      import.meta.url
    ).href,
    description: "Rib neck t-shirt with textured fabric and comfortable fit.",
    details: "100% Cotton, machine washable, made in Portugal",
    stock: 16,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 21,
    name: "STRUCTURED SOFT SWEATER",
    category: "sweaters",
    price: 33,
    size: "xl",
    color: "blue",
    image: new URL(`../assets/images/men/product-21-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-21-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Structured soft sweater with modern design and comfortable fit.",
    details: "100% Cotton, machine washable, made in Spain",
    stock: 9,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 22,
    name: "VINTAGE FADED T-SHIRT",
    category: "tshirts",
    price: 27,
    size: "m",
    color: "gray",
    image: new URL(`../assets/images/men/product-22-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-22-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Vintage faded t-shirt with distressed look and comfortable fit.",
    details: "100% Cotton, machine washable, made in USA",
    stock: 14,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 23,
    name: "CASHMERE BLEND SWEATER",
    category: "sweaters",
    price: 67,
    size: "l",
    color: "brown",
    image: new URL(`../assets/images/men/product-23-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-23-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Cashmere blend sweater with luxurious feel and comfortable fit.",
    details: "50% Cashmere, 50% Wool, dry clean only, made in Scotland",
    stock: 3,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 24,
    name: "VINTAGE FADED DENIM T-SHIRT",
    category: "tshirts",
    price: 31,
    size: "s",
    color: "blue",
    image: new URL(`../assets/images/men/product-24-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/men/product-24-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Vintage faded denim t-shirt with unique texture and comfortable fit.",
    details: "100% Cotton with denim finish, machine washable, made in Japan",
    stock: 11,
    sizes: ["S", "M", "L", "XL"],
  },
];

export const getWomenProducts = () => [
  {
    id: 101,
    name: "RIB-KNIT SWEATER",
    category: "sweaters",
    price: 29,
    size: "m",
    color: "beige",
    image: new URL(`../assets/images/women/product-1-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-1-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Comfortable rib-knit sweater in light beige with soft texture.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 8,
  },
  {
    id: 102,
    name: "OVERSIZED T-SHIRT",
    category: "tshirts",
    price: 22,
    size: "l",
    color: "cream",
    image: new URL(`../assets/images/women/product-2-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-2-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Relaxed fit oversized t-shirt in cream for comfortable everyday wear.",
    details:
      "Material: 100% Cotton | Fit: Oversized | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 12,
  },
  {
    id: 103,
    name: "RIB-KNIT JUMPER",
    category: "sweaters",
    price: 25,
    size: "m",
    color: "mustard",
    image: new URL(`../assets/images/women/product-3-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-3-2.jpg`,
      import.meta.url
    ).href,
    description: "Mustard yellow rib-knit jumper with classic styling.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 6,
  },
  {
    id: 104,
    name: "OVERSIZED PRINTED T-SHIRT",
    category: "tshirts",
    price: 30,
    size: "l",
    color: "blue",
    image: new URL(`../assets/images/women/product-4-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-4-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Light blue printed t-shirt with graphic design and relaxed fit.",
    details:
      "Material: 100% Cotton | Fit: Oversized | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 10,
  },
  {
    id: 105,
    name: "JACQUARD-KNIT JUMPER",
    category: "sweaters",
    price: 40,
    size: "m",
    color: "red",
    image: new URL(`../assets/images/women/product-5-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-5-2.jpg`,
      import.meta.url
    ).href,
    description: "Red and white patterned jacquard jumper with festive design.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 7,
  },
  {
    id: 106,
    name: "SIMPLE T-SHIRT",
    category: "tshirts",
    price: 45,
    size: "m",
    color: "black",
    image: new URL(`../assets/images/women/product-6-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-6-2.jpg`,
      import.meta.url
    ).href,
    description: "Classic black simple t-shirt for versatile styling.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 15,
  },
  {
    id: 107,
    name: "JACQUARD-KNIT SWEATER",
    category: "sweaters",
    price: 30,
    size: "l",
    color: "cream",
    image: new URL(`../assets/images/women/product-7-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-7-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Cream and red fair isle patterned sweater with traditional design.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 9,
  },
  {
    id: 108,
    name: "WHITE T-SHIRT",
    category: "tshirts",
    price: 19,
    size: "s",
    color: "white",
    image: new URL(`../assets/images/women/product-8-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-8-2.jpg`,
      import.meta.url
    ).href,
    description: "Essential white t-shirt for everyday wardrobe.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
  },
  {
    id: 109,
    name: "BEADED JUMPER",
    category: "sweaters",
    price: 27,
    size: "m",
    color: "sage",
    image: new URL(`../assets/images/women/product-9-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-9-2.jpg`,
      import.meta.url
    ).href,
    description: "Light sage green beaded jumper with elegant details.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Hand wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 5,
  },
  {
    id: 110,
    name: "MOTIF-DETAIL T-SHIRT",
    category: "tshirts",
    price: 35,
    size: "l",
    color: "peach",
    image: new URL(`../assets/images/women/product-10-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-10-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Peach colored t-shirt with motif details and feminine styling.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 8,
  },
  {
    id: 111,
    name: "MOHAIR-BLEND FINE-KNIT JUMPER",
    category: "sweaters",
    price: 29,
    size: "m",
    color: "red",
    image: new URL(`../assets/images/women/product-11-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-11-2.jpg`,
      import.meta.url
    ).href,
    description: "Red mohair-blend fine-knit jumper with soft texture.",
    details:
      "Material: 70% Cotton, 30% Mohair | Fit: Regular | Care: Hand wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 6,
  },
  {
    id: 112,
    name: "OXFORD PRINTED T-SHIRT",
    category: "tshirts",
    price: 35,
    size: "l",
    color: "blue",
    image: new URL(`../assets/images/women/product-12-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-12-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Light blue Oxford University printed t-shirt with collegiate style.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 11,
  },
  {
    id: 113,
    name: "RIB-KNIT SWEATER",
    category: "sweaters",
    price: 27,
    size: "m",
    color: "black",
    image: new URL(`../assets/images/women/product-13-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-13-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Black and white striped rib-knit sweater with classic pattern.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 7,
  },
  {
    id: 114,
    name: "FITTED T-SHIRT",
    category: "tshirts",
    price: 10,
    size: "s",
    color: "navy",
    image: new URL(`../assets/images/women/product-14-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-14-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Navy fitted t-shirt with Marseille text and athletic styling.",
    details:
      "Material: 100% Cotton | Fit: Fitted | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 18,
  },
  {
    id: 115,
    name: "LIME GREEN SWEATER",
    category: "sweaters",
    price: 35,
    size: "l",
    color: "lime",
    image: new URL(`../assets/images/women/product-15-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-15-2.jpg`,
      import.meta.url
    ).href,
    description: "Bright lime green sweater for bold fashion statements.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 4,
  },
  {
    id: 116,
    name: "BLUR PRINTED T-SHIRT",
    category: "tshirts",
    price: 40,
    size: "m",
    color: "grey",
    image: new URL(`../assets/images/women/product-16-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-16-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Dark grey t-shirt with faded graphic print and vintage appeal.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 9,
  },
  {
    id: 117,
    name: "FINE-KNIT CASHMERE SWEATER",
    category: "sweaters",
    price: 49,
    size: "m",
    color: "blue",
    image: new URL(`../assets/images/women/product-17-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-17-2.jpg`,
      import.meta.url
    ).href,
    description: "Blue turtleneck cashmere sweater with luxurious feel.",
    details:
      "Material: 100% Cashmere | Fit: Regular | Care: Dry clean only | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 3,
  },
  {
    id: 118,
    name: "MIKEY T-SHIRT",
    category: "tshirts",
    price: 18,
    size: "s",
    color: "pink",
    image: new URL(`../assets/images/women/product-18-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-18-2.jpg`,
      import.meta.url
    ).href,
    description: "Light pink Mikey t-shirt with playful design.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 14,
  },
  {
    id: 119,
    name: "FINE-KNIT CASHMERE SWEATER",
    category: "sweaters",
    price: 30,
    size: "l",
    color: "grey",
    image: new URL(`../assets/images/women/product-19-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-19-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Light grey crew neck cashmere sweater with elegant simplicity.",
    details:
      "Material: 100% Cashmere | Fit: Regular | Care: Dry clean only | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 5,
  },
  {
    id: 120,
    name: "INHALE EXHALE T-SHIRT",
    category: "tshirts",
    price: 25,
    size: "m",
    color: "green",
    image: new URL(`../assets/images/women/product-20-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-20-2.jpg`,
      import.meta.url
    ).href,
    description: "Light green t-shirt with text design and mindful messaging.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 13,
  },
  {
    id: 121,
    name: "FINE-KNIT CASHMERE SWEATER",
    category: "sweaters",
    price: 60,
    size: "l",
    color: "black",
    image: new URL(`../assets/images/women/product-21-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-21-2.jpg`,
      import.meta.url
    ).href,
    description: "Black fine-knit cashmere sweater with premium quality.",
    details:
      "Material: 100% Cashmere | Fit: Regular | Care: Dry clean only | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 2,
  },
  {
    id: 122,
    name: "NEVANA PRINTED T-SHIRT",
    category: "tshirts",
    price: 45,
    size: "m",
    color: "cream",
    image: new URL(`../assets/images/women/product-22-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-22-2.jpg`,
      import.meta.url
    ).href,
    description:
      "Cream colored t-shirt with Nevana graphic print and artistic design.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 6,
  },
  {
    id: 123,
    name: "KNITTED JUMPER",
    category: "sweaters",
    price: 20,
    size: "s",
    color: "grey",
    image: new URL(`../assets/images/women/product-23-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-23-2.jpg`,
      import.meta.url
    ).href,
    description: "Dark grey knitted jumper with cozy comfort.",
    details:
      "Material: 100% Cotton | Fit: Regular | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 16,
  },
  {
    id: 124,
    name: "LONG PRINTED T-SHIRT",
    category: "tshirts",
    price: 25,
    size: "l",
    color: "olive",
    image: new URL(`../assets/images/women/product-24-1.jpg`, import.meta.url)
      .href,
    hoverImage: new URL(
      `../assets/images/women/product-24-2.jpg`,
      import.meta.url
    ).href,
    description: "Olive green t-shirt with AC/DC logo and rock music styling.",
    details:
      "Material: 100% Cotton | Fit: Long | Care: Machine wash cold | Available sizes: S, M, L, XL",
    sizes: ["S", "M", "L", "XL"],
    stock: 10,
  },
];
