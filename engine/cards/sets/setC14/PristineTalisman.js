"use strict";
const Constants = require ("../../../Constants");
const PristineTalismanBase = require("../setC13/PristineTalisman");

class PristineTalisman extends PristineTalismanBase {
  constructor(game) {
    super(game, "Pristine Talisman", "Commander 2014", "C14");
  }
}

module.exports = PristineTalisman;
