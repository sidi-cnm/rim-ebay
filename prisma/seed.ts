import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data first
  await prisma.subCategory.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.typeAnnonce.deleteMany({});
  
  // Then proceed with your seeds
  const typeAnnonce1 = await prisma.typeAnnonce.create({
    data: {
      name: 'Location',
      nameAr: 'النوع ',
      priority: 1,
    },
  });

  // Seed Category
  const category1 = await prisma.category.create({
    data: {
      name: 'Appartement',
      nameAr: 'شقة',
      typeAnnonceId: typeAnnonce1.id,
      priority: 1,
    },
  });

  // Seed SubCategory
  const subCategory1 = await prisma.subCategory.create({
    data: {
      name: 'Studio',
      nameAr: 'استوديو',
      categorieId: category1.id,
      priority: 1,
    },
  });

  const subCategory2 = await prisma.subCategory.create({
    data: {
      name: 'F2',
      nameAr: 'غرفتين',
      categorieId: category1.id,
      priority: 2,
    },
  });

  const subCategory3 = await prisma.subCategory.create({
    data: {
      name: 'F3',
      nameAr: 'ثلاث غرف',
      categorieId: category1.id,
      priority: 3,
    },
  });

  // Seed Wilaya
  const wilaya1 = await prisma.wilaya.create({
    data: {
      name: 'Wilaya 1',
      nameAr: 'ولاية 1',
      priority: 1,
    },
  });

  // Seed Moughataa
  const moughataa1 = await prisma.moughataa.create({
    data: {
      name: 'Moughataa 1',
      nameAr: 'مقاطعة 1',
      priority: 1,
    },
  });

  // Seed GPSLocation
  const gpsLocation1 = await prisma.gPSLocation.create({
    data: {
      latitude: 35.6895,
      longitude: 139.6917,
    },
  });

  // Seed Lieu
  const lieu1 = await prisma.lieu.create({
    data: {
      wilayaId: wilaya1.id,
      moughataaId: moughataa1.id,
      gpsLocationId: gpsLocation1.id,
    },
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 