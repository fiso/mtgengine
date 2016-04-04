"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageSummoning extends Card {
  constructor(game) {
    super(game, "Savage Summoning", "Magic 2014 Core Set", "M14");
  }
}

module.exports = SavageSummoning;
