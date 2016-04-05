"use strict";
const Constants = require ("../../../Constants");
const BlindingAngelBase = require("../set8ED/BlindingAngel");

class BlindingAngel extends BlindingAngelBase {
  constructor(game) {
    super(game, "Blinding Angel", "Ninth Edition", "9ED");
  }
}

module.exports = BlindingAngel;
