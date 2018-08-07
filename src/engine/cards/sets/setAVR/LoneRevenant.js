"use strict";
const Constants = require ("../../../Constants");
const LoneRevenantBase = require("../setC15/LoneRevenant");

class LoneRevenant extends LoneRevenantBase {
  constructor (game) {
    super(game, "Lone Revenant", "Avacyn Restored", "AVR");
  }
}

module.exports = LoneRevenant;
