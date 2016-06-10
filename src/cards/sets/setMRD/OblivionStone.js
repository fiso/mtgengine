"use strict";
const Constants = require ("../../../Constants");
const OblivionStoneBase = require("../setCMD/OblivionStone");

class OblivionStone extends OblivionStoneBase {
  constructor (game) {
    super(game, "Oblivion Stone", "Mirrodin", "MRD");
  }
}

module.exports = OblivionStone;
