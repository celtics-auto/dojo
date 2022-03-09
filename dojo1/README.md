## Contexto
Vocês são uma equipe de uma corretora de criptomoedas. 
Para uma determinada moeda, a Big Goat Coin 🐐, existem pessoas querendo comprá-la e querendo vendê-la.

```json
{
    buyOffers: [100, 100, 99, 99, 97, 90]
    sellOffers: [109, 110, 110, 114, 115, 119]
}
```

## Problema 1 - Rotas

Criem rotas para manipular os conjuntos de ofertas:

- [x] Adicionar ofertas de compra.
- [x] Adicionar ofertas de venda.  
- [x] Retornar ofertas de compra.
- [x] Retornar ofertas de venda.
- [x] Retornar todas as ofertas.

Nesse primeiro momento não precisam se preocupar com persistência.

## Problema 2 - Match

Um *match* acontece quando duas pessoas concordam em um preço. Algumas novas ofertas não dão *match*, elas devem ser adicionadas ao conjunto de ofertas ativas.

Por exemplo, Tim oferece vender um :goat: por $150, porém não existe *match* no conjunto de ofertas de compra, então salvamos essa oferta.

`sellOffers = [109, 110, 110, 114, 115, 119, 150]`

Querem dar ao cliente o "melhor preço", exemplo:

Se alguém oferece a comprar por $120, o `match` vai acontecer com o primeiro elemento do array `sellOffers`, `109`, a menor oferta.
