import { prisma } from './prismaClient'

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Bluetooth Headphones",
        price: 129.0,
        imageUrl: "https://images.pexels.com/photos/5269759/pexels-photo-5269759.jpeg",
        category: "Electronics",
        variants: JSON.stringify(['Black','White']),
        inStock: true,
        stock: 20,
      },
      {
        name: "Smartwatch",
        price: 199.99,
        imageUrl: "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg",
        category: "Electronics",
        variants: JSON.stringify(["Silver", "Black"]),
        inStock: true,
        stock: 15,
      },
      {
        name: "Backpack",
        price: 59.99,
        imageUrl: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
        category: "Accessories",
        variants: JSON.stringify(["Standard"]),
        inStock: false,
        stock: 0,
      },
      {
        name: "Coffee Mug",
        price: 12.5,
        imageUrl: "https://images.pexels.com/photos/593332/pexels-photo-593332.jpeg",
        category: "Accessories",
        variants: JSON.stringify([]),
        inStock: true,
        stock: 100,
      },
      {
        name: "Denim Jacket",
        price: 79.99,
        imageUrl: "https://images.pexels.com/photos/1865603/pexels-photo-1865603.jpeg",
        category: "Apparel",
        variants: JSON.stringify(["S", "M", "L"]),
        inStock: true,
        stock: 25,
      }
    ]
  })
  console.log('✅ Database seeded successfully')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
