"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PristineTalismanBase = require("../setC13/PristineTalisman.js");

class PristineTalisman extends PristineTalismanBase {
  constructor(game) {
    super(game, "Pristine Talisman", "Magic Game Day", "pMGD");
  }
}

module.exports = PristineTalisman;
