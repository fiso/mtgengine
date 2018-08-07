"use strict";
const Constants = require ("../../../Constants");
const DecreeofJusticeBase = require("../setA25/DecreeofJustice");

class DecreeofJustice extends DecreeofJusticeBase {
  constructor (game) {
    super(game, "Decree of Justice", "Vintage Masters", "VMA");
  }
}

module.exports = DecreeofJustice;
