"use strict";
const Constants = require ("../../../Constants");
const NettlingImpBase = require("../setSUM/NettlingImp");

class NettlingImp extends NettlingImpBase {
  constructor (game) {
    super(game, "Nettling Imp", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = NettlingImp;
