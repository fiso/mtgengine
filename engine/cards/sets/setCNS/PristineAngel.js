"use strict";
const Constants = require ("../../../Constants");
const PristineAngelBase = require("../setDST/PristineAngel");

class PristineAngel extends PristineAngelBase {
  constructor(game) {
    super(game, "Pristine Angel", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PristineAngel;
