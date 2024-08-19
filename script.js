document.addEventListener("DOMContentLoaded", function() {
    const dadosCinderace = {
        "abilities": [
            {
                "ability": {
                    "name": "blaze",
                    "url": "https://pokeapi.co/api/v2/ability/66/"
                },
                "is_hidden": false,
                "slot": 1
            },
            {
                "ability": {
                    "name": "libero",
                    "url": "https://pokeapi.co/api/v2/ability/236/"
                },
                "is_hidden": true,
                "slot": 3
            }
        ],
        "base_experience": 265,
        "cries": {
            "latest": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/815.ogg",
            "legacy": null
        },
        "forms": [
            {
                "name": "cinderace",
                "url": "https://pokeapi.co/api/v2/pokemon-form/815/"
            }
        ],
        "height": 14, // em decímetros
        "id": 815,
        "is_default": true,
        "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/815/encounters",
        "types": [
            {
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "moves": [
            {
                "move": {
                    "name": "fire-punch",
                    "url": "https://pokeapi.co/api/v2/move/7/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sword-shield",
                            "url": "https://pokeapi.co/api/v2/version-group/20/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "scarlet-violet",
                            "url": "https://pokeapi.co/api/v2/version-group/25/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "swords-dance",
                    "url": "https://pokeapi.co/api/v2/move/14/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "scarlet-violet",
                            "url": "https://pokeapi.co/api/v2/version-group/25/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "double-kick",
                    "url": "https://pokeapi.co/api/v2/move/24/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 12,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sword-shield",
                            "url": "https://pokeapi.co/api/v2/version-group/20/"
                        }
                    }
                ]
            }
        ]
    };

    // Preencher a página com dados
    document.getElementById('pokemon-id').textContent = dadosCinderace.id;
    document.getElementById('pokemon-height').textContent = dadosCinderace.height / 10; // Convertendo de decímetros para metros
    document.getElementById('pokemon-base-experience').textContent = dadosCinderace.base_experience;

    const habilidades = dadosCinderace.abilities.map(ability => ability.ability.name).join(', ');
    document.getElementById('pokemon-abilities').textContent = habilidades;

    const linkSom = document.getElementById('pokemon-cry');
    linkSom.href = dadosCinderace.cries.latest;
    linkSom.textContent = 'Ouvir';

    // Adicionar tipos
    const tipos = dadosCinderace.types.map(type => type.type.name).join(', ');
    document.getElementById('pokemon-types').textContent = tipos;

    // Adicionar locais de encontro
    fetch(dadosCinderace.location_area_encounters)
        .then(response => response.json())
        .then(data => {
            const listaEncontros = document.getElementById('pokemon-encounters-list');
            data.location_area_encounters.forEach(encounter => {
                const link = document.createElement('a');
                link.href = encounter.url;
                link.textContent = encounter.name;
                link.target = "_blank";
                const listItem = document.createElement('li');
                listItem.appendChild(link);
                listaEncontros.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao carregar locais de encontro:', error));

    // Definir uma imagem padrão
    document.getElementById('pokemon-image').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png';

    // Preencher movimentos
    const movesList = document.getElementById('moves-list');
    dadosCinderace.moves.forEach(move => {
        const moveItem = document.createElement('li');
        moveItem.textContent = move.move.name;
        movesList.appendChild(moveItem);
    });
});

