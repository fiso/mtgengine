"use strict";
const Constants = require ("../../../Constants");
const OblivionStoneBase = require("../setCM2/OblivionStone");

class OblivionStone extends OblivionStoneBase {
  constructor (game) {
    super(game, "Oblivion Stone", "Iconic Masters", "IMA");
  }
}

module.exports = OblivionStone;
