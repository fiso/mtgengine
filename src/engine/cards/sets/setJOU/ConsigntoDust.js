"use strict";
const Constants = require ("../../../Constants");
const ConsigntoDustBase = require("../setC18/ConsigntoDust");

class ConsigntoDust extends ConsigntoDustBase {
  constructor (game) {
    super(game, "Consign to Dust", "Journey into Nyx", "JOU");
  }
}

module.exports = ConsigntoDust;
