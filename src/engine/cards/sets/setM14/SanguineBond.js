"use strict";
const Constants = require ("../../../Constants");
const SanguineBondBase = require("../setIMA/SanguineBond");

class SanguineBond extends SanguineBondBase {
  constructor (game) {
    super(game, "Sanguine Bond", "Magic 2014", "M14");
  }
}

module.exports = SanguineBond;
