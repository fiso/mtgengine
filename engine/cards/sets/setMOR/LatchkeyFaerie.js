"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LatchkeyFaerieBase = require("../setMMA/LatchkeyFaerie.js");

class LatchkeyFaerie extends LatchkeyFaerieBase {
  constructor(game) {
    super(game, "Latchkey Faerie", "Morningtide", "MOR");
  }
}

module.exports = LatchkeyFaerie;
