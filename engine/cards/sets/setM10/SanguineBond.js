"use strict";
const Constants = require ("../../../Constants");
const SanguineBondBase = require("../setC13/SanguineBond");

class SanguineBond extends SanguineBondBase {
  constructor(game) {
    super(game, "Sanguine Bond", "Magic 2010", "M10");
  }
}

module.exports = SanguineBond;
