"use strict";
const Constants = require ("../../../Constants");
const FiligreeFamiliarBase = require("../setDDU/FiligreeFamiliar");

class FiligreeFamiliar extends FiligreeFamiliarBase {
  constructor (game) {
    super(game, "Filigree Familiar", "Kaladesh", "KLD");
  }
}

module.exports = FiligreeFamiliar;
