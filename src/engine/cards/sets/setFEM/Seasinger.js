"use strict";
const Constants = require ("../../../Constants");
const SeasingerBase = require("../setMED/Seasinger");

class Seasinger extends SeasingerBase {
  constructor (game) {
    super(game, "Seasinger", "Fallen Empires", "FEM");
  }
}

module.exports = Seasinger;
