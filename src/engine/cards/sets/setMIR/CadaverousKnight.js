"use strict";
const Constants = require ("../../../Constants");
const CadaverousKnightBase = require("../setHOP/CadaverousKnight");

class CadaverousKnight extends CadaverousKnightBase {
  constructor (game) {
    super(game, "Cadaverous Knight", "Mirage", "MIR");
  }
}

module.exports = CadaverousKnight;
