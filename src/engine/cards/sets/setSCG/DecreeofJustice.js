"use strict";
const Constants = require ("../../../Constants");
const DecreeofJusticeBase = require("../setA25/DecreeofJustice");

class DecreeofJustice extends DecreeofJusticeBase {
  constructor (game) {
    super(game, "Decree of Justice", "Scourge", "SCG");
  }
}

module.exports = DecreeofJustice;
