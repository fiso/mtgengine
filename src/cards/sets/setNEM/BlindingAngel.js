"use strict";
const Constants = require ("../../../Constants");
const BlindingAngelBase = require("../set9ED/BlindingAngel");

class BlindingAngel extends BlindingAngelBase {
  constructor (game) {
    super(game, "Blinding Angel", "Nemesis", "NEM");
  }
}

module.exports = BlindingAngel;
