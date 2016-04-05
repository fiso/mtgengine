"use strict";
const Constants = require ("../../../Constants");
const LoneRevenantBase = require("../setAVR/LoneRevenant");

class LoneRevenant extends LoneRevenantBase {
  constructor(game) {
    super(game, "Lone Revenant", "Commander 2015", "C15");
  }
}

module.exports = LoneRevenant;
