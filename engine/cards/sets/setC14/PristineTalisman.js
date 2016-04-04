"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PristineTalismanBase = require("../setC13/PristineTalisman.js");

class PristineTalisman extends PristineTalismanBase {
  constructor(game) {
    super(game, "Pristine Talisman", "Commander 2014", "C14");
  }
}

module.exports = PristineTalisman;
