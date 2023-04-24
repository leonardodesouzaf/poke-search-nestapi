import { Controller, Get, Param, Post, Body, Query, Delete, Put } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '@prisma/client';

@Controller('pokemon')
export class PokemonController {
    constructor(private pokemonService: PokemonService) { }

    @Get()
    async getPokemons() {
        const pokemons = await this.pokemonService.getPokemons();
        return pokemons;
    }

    @Get(':pokemonId')
    async getPokemon(@Param('pokemonId') pokemonId) {
        const pokemon = await this.pokemonService.getPokemon(pokemonId);
        return pokemon;
    }

    @Post()
    async postPokemon(@Body() pokemonData: Pokemon) {
        const pokemon = await this.pokemonService.upsertPokemon(pokemonData, '000000000000000000000000');
        return pokemon;
    }

    @Put(':pokemonId')
    async putPokemon(@Body() pokemonData: Pokemon, @Param('pokemonId') pokemonId) {
        const pokemon = await this.pokemonService.upsertPokemon(pokemonData, pokemonId);
        return pokemon;
    }

    @Delete(':pokemonId')
    async deletePokemon(@Param('pokemonId') pokemonId) {
        const pokemon = await this.pokemonService.deletePokemon(pokemonId);
        return pokemon;
    }
}
