"use strict";
const Constants = require ("../../../Constants");
const LatchkeyFaerieBase = require("../setMMA/LatchkeyFaerie");

class LatchkeyFaerie extends LatchkeyFaerieBase {
  constructor(game) {
    super(game, "Latchkey Faerie", "Morningtide", "MOR");
  }
}

module.exports = LatchkeyFaerie;
