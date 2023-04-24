import { Injectable, HttpException } from '@nestjs/common';
import prisma from '../config/prisma';
import { Pokemon } from '@prisma/client';

@Injectable()
export class PokemonService {
    
    getPokemons(): Promise<Pokemon[]> {
        return prisma.pokemon.findMany();
    }

    getPokemon(pokemonId): Promise<Pokemon> {
        return prisma.pokemon.findUnique({
            where: {
                id: pokemonId
            }
        });;
    }

    createPokemon(pokemonData): Promise<Pokemon> {
        return prisma.pokemon.create({
            data: pokemonData
          });
    }

    upsertPokemon(pokemonData, pokemonId): Promise<Pokemon> {
        let pokemonUpdateData = pokemonData;
        delete pokemonUpdateData.id;
        return prisma.pokemon.upsert({
            where: {
              id: pokemonId,
            },
            update: pokemonUpdateData,
            create: pokemonData
          });
    }

    deletePokemon(pokemonId): Promise<Pokemon> {
        return prisma.pokemon.delete({
            where: {
                id: pokemonId
            }
        });
    }
}
