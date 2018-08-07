"use strict";
const Constants = require ("../../../Constants");
const SnakeUmbraBase = require("../setC18/SnakeUmbra");

class SnakeUmbra extends SnakeUmbraBase {
  constructor (game) {
    super(game, "Snake Umbra", "Planechase Anthology", "PCA");
  }
}

module.exports = SnakeUmbra;
