"use strict";
const Constants = require ("../../../Constants");
const FoulSpiritBase = require("../setME4/FoulSpirit");

class FoulSpirit extends FoulSpiritBase {
  constructor(game) {
    super(game, "Foul Spirit", "Portal Second Age", "PO2");
  }
}

module.exports = FoulSpirit;
