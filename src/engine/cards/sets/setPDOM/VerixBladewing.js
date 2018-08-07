"use strict";
const Constants = require ("../../../Constants");
const VerixBladewingBase = require("../setDOM/VerixBladewing");

class VerixBladewing extends VerixBladewingBase {
  constructor (game) {
    super(game, "Verix Bladewing", "Dominaria Promos", "PDOM");
  }
}

module.exports = VerixBladewing;
