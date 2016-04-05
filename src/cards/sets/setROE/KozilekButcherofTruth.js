"use strict";
const Constants = require ("../../../Constants");
const KozilekButcherofTruthBase = require("../setMM2/KozilekButcherofTruth");

class KozilekButcherofTruth extends KozilekButcherofTruthBase {
  constructor(game) {
    super(game, "Kozilek, Butcher of Truth", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KozilekButcherofTruth;
