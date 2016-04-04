"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuturePriestBase = require("../setpMGD/SuturePriest.js");

class SuturePriest extends SuturePriestBase {
  constructor(game) {
    super(game, "Suture Priest", "New Phyrexia", "NPH");
  }
}

module.exports = SuturePriest;
