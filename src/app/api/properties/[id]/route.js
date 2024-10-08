import { NextResponse } from 'next/server';

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Apartment",
    address: "123 Downtown St, City",
    price: 350000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    description: "A beautiful modern apartment in the heart of the city.",
    image: "https://example.com/apartment-image.jpg"
  },
  {
    id: 2,
    title: "Suburban House",
    address: "456 Quiet Lane, Suburb",
    price: 450000,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2000,
    description: "A spacious family home in a peaceful suburban neighborhood.",
    image: "https://example.com/house-image.jpg"
  },
  {
    id: 3,
    title: "Luxury Condo",
    address: "789 Waterfront Ave, City",
    price: 750000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    description: "An exclusive condo with stunning waterfront views.",
    image: "https://example.com/condo-image.jpg"
  }
];

export async function GET(request, { params }) {
  const id = parseInt(params.id);
  const property = properties.find(p => p.id === id);

  if (property) {
    return NextResponse.json(property);
  } else {
    return new NextResponse("Property not found", { status: 404 });
  }
}