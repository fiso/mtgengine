"use strict";
const Constants = require ("../../../Constants");
const SanguineBondBase = require("../setIMA/SanguineBond");

class SanguineBond extends SanguineBondBase {
  constructor (game) {
    super(game, "Sanguine Bond", "Commander 2013", "C13");
  }
}

module.exports = SanguineBond;
