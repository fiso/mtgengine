"use strict";
const Constants = require ("../../../Constants");
const MutualEpiphanyBase = require("../setPCA/MutualEpiphany");

class MutualEpiphany extends MutualEpiphanyBase {
  constructor (game) {
    super(game, "Mutual Epiphany", "Planechase 2012", "PC2");
  }
}

module.exports = MutualEpiphany;
