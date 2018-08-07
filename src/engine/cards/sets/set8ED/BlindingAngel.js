"use strict";
const Constants = require ("../../../Constants");
const BlindingAngelBase = require("../set9ED/BlindingAngel");

class BlindingAngel extends BlindingAngelBase {
  constructor (game) {
    super(game, "Blinding Angel", "Eighth Edition", "8ED");
  }
}

module.exports = BlindingAngel;
