"use strict";
const Constants = require ("../../../Constants");
const PristineTalismanBase = require("../setCM2/PristineTalisman");

class PristineTalisman extends PristineTalismanBase {
  constructor (game) {
    super(game, "Pristine Talisman", "New Phyrexia", "NPH");
  }
}

module.exports = PristineTalisman;
