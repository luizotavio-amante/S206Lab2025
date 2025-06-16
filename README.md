Capturas do relatorio HTML feito

![Captura de tela 2025-06-16 103932](https://github.com/user-attachments/assets/ab8f5c7a-8912-4852-b1df-263ff453d35d)

![Captura de tela 2025-06-16 103947](https://github.com/user-attachments/assets/01c5d59d-fa9c-42ab-807d-88d85723bb08)

Para gerar 10 imagens aleatorias no site foi usado o link: https://api.thecatapi.com/v1/images/search?limit=10
no Body usei:
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}

e como parametro foi usado:
key : limit
value: 10

Para peagr uma imagem
no link usei: https://api.thecatapi.com/v1/images/search
metodo: GET
na hora que aperta send vai gerar algo deste tipo:
[
    {
        "id": "4ot",
        "url": "https://cdn2.thecatapi.com/images/4ot.jpg",
        "width": 530,
        "height": 530
    }
]
e as informações poderao ser alteradas a cada vez que roda o teste

Para favoritar uma imagem:
link: https://api.thedogapi.com/v1/favourites
metodo : POST
Body: {
  "image_id": "4ot",
  "sub_id": "usuario-teste"
}
esse image_id é de acordo com a saida do teste anterior, e se tentar favoritar 2 vezes da erro de duplicate favorite

![Captura de tela 2025-06-16 105333](https://github.com/user-attachments/assets/a04f5a25-6f02-4c98-9f40-40abf3371641)


Remover dos favoritos:
link: https://api.thecatapi.com/v1/favourites/104856
esse ultimo numero é de acordo com a saida do numero do teste anterior.
Metodo: DELETE
Headers: Key: x-api-key / valeu: eles mandam no email assim que faz o cadastro no site





