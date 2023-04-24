export class CreatePokemonDTO {

    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly imageUrl: string;
    readonly ability: [string];
    readonly description: string;

}