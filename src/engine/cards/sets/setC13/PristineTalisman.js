"use strict";
const Constants = require ("../../../Constants");
const PristineTalismanBase = require("../setCM2/PristineTalisman");

class PristineTalisman extends PristineTalismanBase {
  constructor (game) {
    super(game, "Pristine Talisman", "Commander 2013", "C13");
  }
}

module.exports = PristineTalisman;
