"use strict";
const Constants = require ("../../../Constants");
const BlindingAngelBase = require("../set8ED/BlindingAngel");

class BlindingAngel extends BlindingAngelBase {
  constructor(game) {
    super(game, "Blinding Angel", "Nemesis", "NMS");
  }
}

module.exports = BlindingAngel;
