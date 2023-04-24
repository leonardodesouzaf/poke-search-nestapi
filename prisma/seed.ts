import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const pokeData: Prisma.PokemonCreateInput[] = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    imageUrl: 'http',
    ability: 'Poison',
    description: 'Pokemon'
  },
  {
    name: 'Pikachu',
    type: 'Electric',
    imageUrl: 'http',
    ability: 'Energy',
    description: 'Pokemon'
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of pokeData) {
    const pokemon = await prisma.pokemon.create({
      data: u,
    })
    console.log(`Created pokemon with id: ${pokemon.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
