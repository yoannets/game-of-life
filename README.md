# Game-of-life

Game of life algo

> Note: See example [here](https://yoannchb-pro.github.io/game-of-life/index.html)

## Import

```html
<script src="https://cdn.jsdelivr.net/gh/yoannchb-pro/game-of-life/index.min.js"></script>
```

## How to use

There are two arguments `nbCelssWidth` and `nbCellsHeight` (by default 50 and 50) for the number of cells you want on the width and on the height

```js
const handler = new GameOfLife(3, 3);
console.log(handler.game);
//[[0, 0, 0], [0, 0, 0], [0, 0, 0]]
```

### Random generation

There is one argument `factor` (by default 0.2) between 0 and 1 that determine the probability of a cell to be alive

```js
handler.randomGeneration();
//[[0, 0, 1], [1, 0, 1], [1, 0, 0]]
```

### Evoluate

Evoluate the environment

```js
//[[0, 1, 0], [0, 1, 0], [0, 1, 0]]
handler.evoluate();
//[[0, 0, 0], [1, 1, 1], [0, 0, 0]]
```

### Hydratate

There are two arguments `line` and `column`

```js
handler.hydratate(1, 2);
//[[0, 0, 0], [0, 0, 1], [0, 0, 0]]
```

### Deshydratate

There are two arguments `line` and `column`

```js
//[[0, 0, 0], [0, 0, 1], [0, 0, 0]]
handler.deshydratate(1, 2);
//[[0, 0, 0], [0, 0, 0], [0, 0, 0]]
```

### Clear

Clear the whole environment

```js
//[[0, 1, 0], [0, 1, 0], [0, 1, 0]]
handler.clear();
//[[0, 0, 0], [0, 0, 0], [0, 0, 0]]
```
