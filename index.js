class GameOfLife {
  constructor(nbCellsWidth, nbCellsHeight) {
    this.nbCellsWidth = nbCellsWidth ?? 50;
    this.nbCellsHeight = nbCellsHeight ?? 50;
    this.game = [];

    this.initGame();
  }

  initGame() {
    for (let y = 0; y < this.nbCellsWidth; ++y) {
      this.game.push([]);
      for (let x = 0; x < this.nbCellsHeight; ++x) {
        this.game[y].push(0);
      }
    }
  }

  clear() {
    this.game = [];
    this.initGame();
  }

  randomGeneration(factor = 0.2) {
    for (let y = 0; y < this.nbCellsWidth; ++y) {
      for (let x = 0; x < this.nbCellsHeight; ++x) {
        if (Math.random() < factor) this.hydratate(y, x);
        else this.deshydratate(y, x);
      }
    }
  }

  deshydratate(line, column) {
    this.game[line][column] = 0;
  }

  hydratate(line, column) {
    this.game[line][column] = 1;
  }

  getCase(line, column) {
    return this.game[line]?.[column] ?? 0;
  }

  getNeighboursLength(line, column) {
    let neighbours = 0;

    //left top
    if (this.getCase(line - 1, column - 1)) ++neighbours;
    //top
    if (this.getCase(line - 1, column)) ++neighbours;
    //right top
    if (this.getCase(line - 1, column + 1)) ++neighbours;

    //left
    if (this.getCase(line, column - 1)) ++neighbours;
    //right
    if (this.getCase(line, column + 1)) ++neighbours;

    //bottom left
    if (this.getCase(line + 1, column - 1)) ++neighbours;
    //bottom
    if (this.getCase(line + 1, column)) ++neighbours;
    //bottom right
    if (this.getCase(line + 1, column + 1)) ++neighbours;

    return neighbours;
  }

  evoluate() {
    const copy = JSON.parse(JSON.stringify(this.game));

    for (let y = 0; y < this.game.length; ++y) {
      const line = this.game[y];
      for (let x = 0; x < line.length; ++x) {
        const column = line[x];

        const neighboursLength = this.getNeighboursLength(y, x);

        if (column) {
          if (neighboursLength !== 2 && neighboursLength !== 3) copy[y][x] = 0;
        } else {
          if (neighboursLength === 3) copy[y][x] = 1;
        }
      }
    }

    this.game = copy;
  }
}
