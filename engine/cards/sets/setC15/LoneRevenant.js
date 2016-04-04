"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoneRevenantBase = require("../setAVR/LoneRevenant.js");

class LoneRevenant extends LoneRevenantBase {
  constructor(game) {
    super(game, "Lone Revenant", "Commander 2015", "C15");
  }
}

module.exports = LoneRevenant;
