const uf = [
    {
      "id": 11,
      "sigla": "RO",
      "nome": "Rondônia",
      "bo": true,
      "regiao": {
        "id": 1,
        "sigla": "N",
        "nome": "Norte"
      }
    },
    {
      "id": 12,
      "sigla": "AC",
      "nome": "Acre",
      "bo": true,
      "regiao": {
        "id": 1,
        "sigla": "N",
        "nome": "Norte"
      }
    },
    {
      "id": 13,
      "sigla": "AM",
      "nome": "Amazonas",
      "bo": false,
      "regiao": {
        "id": 1,
        "sigla": "N",
        "nome": "Norte"
      }
    },
    {
      "id": 14,
      "sigla": "RR",
      "nome": "Roraima",
      "bo": true,
      "regiao": {
        "id": 1,
        "sigla": "N",
        "nome": "Norte"
      }
    },
    {
      "id": 15,
      "sigla": "PA",
      "nome": "Pará",
      "bo": true,
      "regiao": {
        "id": 1,
        "sigla": "N",
        "nome": "Norte"
      }
    },
    {
      "id": 16,
      "sigla": "AP",
      "nome": "Amapá",
      "bo": true,
      "regiao": {
        "id": 1,
        "sigla": "N",
        "nome": "Norte"
      }
    },
    {
      "id": 17,
      "sigla": "TO",
      "nome": "Tocantins",
      "bo": true,
      "regiao": {
        "id": 1,
        "sigla": "N",
        "nome": "Norte"
      }
    },
    {
      "id": 21,
      "sigla": "MA",
      "nome": "Maranhão",
      "bo": false,
      "regiao": {
        "id": 2,
        "sigla": "NE",
        "nome": "Nordeste"
      }
    },
    {
      "id": 22,
      "sigla": "PI",
      "nome": "Piauí",
      "bo": false,
      "regiao": {
        "id": 2,
        "sigla": "NE",
        "nome": "Nordeste"
      }
    },
    {
      "id": 23,
      "sigla": "CE",
      "nome": "Ceará",
      "bo": true,
      "regiao": {
        "id": 2,
        "sigla": "NE",
        "nome": "Nordeste"
      }
    },
    {
      "id": 24,
      "sigla": "RN",
      "nome": "Rio Grande do Norte",
      "bo": true,
      "regiao": {
        "id": 2,
        "sigla": "NE",
        "nome": "Nordeste"
      }
    },
    {
      "id": 25,
      "sigla": "PB",
      "nome": "Paraíba",
      "bo": true,
      "regiao": {
        "id": 2,
        "sigla": "NE",
        "nome": "Nordeste"
      }
    },
    {
      "id": 26,
      "sigla": "PE",
      "nome": "Pernambuco",
      "bo": true,
      "regiao": {
        "id": 2,
        "sigla": "NE",
        "nome": "Nordeste"
      }
    },
    {
      "id": 27,
      "sigla": "AL",
      "nome": "Alagoas",
      "bo": true,
      "regiao": {
        "id": 2,
        "sigla": "NE",
        "nome": "Nordeste"
      }
    },
    {
      "id": 28,
      "sigla": "SE",
      "nome": "Sergipe",
      "bo": true,
      "regiao": {
        "id": 2,
        "sigla": "NE",
        "nome": "Nordeste"
      }
    },
    {
      "id": 29,
      "sigla": "BA",
      "nome": "Bahia",
      "bo": false,
      "regiao": {
        "id": 2,
        "sigla": "NE",
        "nome": "Nordeste"
      }
    },
    {
      "id": 31,
      "sigla": "MG",
      "nome": "Minas Gerais",
      "bo": true,
      "regiao": {
        "id": 3,
        "sigla": "SE",
        "nome": "Sudeste"
      }
    },
    {
      "id": 32,
      "sigla": "ES",
      "nome": "Espírito Santo",
      "bo": false,
      "regiao": {
        "id": 3,
        "sigla": "SE",
        "nome": "Sudeste"
      }
    },
    {
      "id": 33,
      "sigla": "RJ",
      "nome": "Rio de Janeiro",
      "bo": true,
      "regiao": {
        "id": 3,
        "sigla": "SE",
        "nome": "Sudeste"
      }
    },
    {
      "id": 35,
      "sigla": "SP",
      "nome": "São Paulo",
      "bo": true,
      "regiao": {
        "id": 3,
        "sigla": "SE",
        "nome": "Sudeste"
      }
    },
    {
      "id": 41,
      "sigla": "PR",
      "nome": "Paraná",
      "bo": true,
      "regiao": {
        "id": 4,
        "sigla": "S",
        "nome": "Sul"
      }
    },
    {
      "id": 42,
      "sigla": "SC",
      "nome": "Santa Catarina",
      "bo": true,
      "regiao": {
        "id": 4,
        "sigla": "S",
        "nome": "Sul"
      }
    },
    {
      "id": 43,
      "sigla": "RS",
      "nome": "Rio Grande do Sul",
      "bo": true,
      "regiao": {
        "id": 4,
        "sigla": "S",
        "nome": "Sul"
      }
    },
    {
      "id": 50,
      "sigla": "MS",
      "nome": "Mato Grosso do Sul",
      "bo": true,
      "regiao": {
        "id": 5,
        "sigla": "CO",
        "nome": "Centro-Oeste"
      }
    },
    {
      "id": 51,
      "sigla": "MT",
      "nome": "Mato Grosso",
      "bo": true,
      "regiao": {
        "id": 5,
        "sigla": "CO",
        "nome": "Centro-Oeste"
      }
    },
    {
      "id": 52,
      "sigla": "GO",
      "nome": "Goiás",
      "bo": false,
      "regiao": {
        "id": 5,
        "sigla": "CO",
        "nome": "Centro-Oeste"
      }
    },
    {
      "id": 53,
      "sigla": "DF",
      "nome": "Distrito Federal",
      "bo": false,
      "regiao": {
        "id": 5,
        "sigla": "CO",
        "nome": "Centro-Oeste"
      }
    }
  ];

export default uf;