"use strict";
const Constants = require ("../../../Constants");
const PristineTalismanBase = require("../setCM2/PristineTalisman");

class PristineTalisman extends PristineTalismanBase {
  constructor (game) {
    super(game, "Pristine Talisman", "Iconic Masters", "IMA");
  }
}

module.exports = PristineTalisman;
