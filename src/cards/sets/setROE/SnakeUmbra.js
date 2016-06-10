"use strict";
const Constants = require ("../../../Constants");
const SnakeUmbraBase = require("../setPC2/SnakeUmbra");

class SnakeUmbra extends SnakeUmbraBase {
  constructor (game) {
    super(game, "Snake Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SnakeUmbra;
