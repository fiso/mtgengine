"use strict";
const Constants = require ("../../../Constants");
const NettlingImpBase = require("../setCED/NettlingImp");

class NettlingImp extends NettlingImpBase {
  constructor (game) {
    super(game, "Nettling Imp", "Limited Edition Beta", "LEB");
  }
}

module.exports = NettlingImp;
