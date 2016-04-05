"use strict";
const Constants = require ("../../../Constants");
const CadaverousKnightBase = require("../setMIR/CadaverousKnight");

class CadaverousKnight extends CadaverousKnightBase {
  constructor(game) {
    super(game, "Cadaverous Knight", "Planechase", "HOP");
  }
}

module.exports = CadaverousKnight;
