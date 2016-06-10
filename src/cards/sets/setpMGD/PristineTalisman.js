"use strict";
const Constants = require ("../../../Constants");
const PristineTalismanBase = require("../setC13/PristineTalisman");

class PristineTalisman extends PristineTalismanBase {
  constructor (game) {
    super(game, "Pristine Talisman", "Magic Game Day", "pMGD");
  }
}

module.exports = PristineTalisman;
