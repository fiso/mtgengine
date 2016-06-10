"use strict";
const Constants = require ("../../../Constants");
const NettlingImpBase = require("../setCED/NettlingImp");

class NettlingImp extends NettlingImpBase {
  constructor (game) {
    super(game, "Nettling Imp", "Limited Edition Alpha", "LEA");
  }
}

module.exports = NettlingImp;
