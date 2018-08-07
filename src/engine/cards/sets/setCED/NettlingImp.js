"use strict";
const Constants = require ("../../../Constants");
const NettlingImpBase = require("../setSUM/NettlingImp");

class NettlingImp extends NettlingImpBase {
  constructor (game) {
    super(game, "Nettling Imp", "Collectors’ Edition", "CED");
  }
}

module.exports = NettlingImp;
