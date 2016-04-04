"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PristineAngelBase = require("../setDST/PristineAngel.js");

class PristineAngel extends PristineAngelBase {
  constructor(game) {
    super(game, "Pristine Angel", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PristineAngel;
