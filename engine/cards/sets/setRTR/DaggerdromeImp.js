"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaggerdromeImp extends Card {
  constructor(game) {
    super(game, "Daggerdrome Imp", "Return to Ravnica", "RTR");
  }
}

module.exports = DaggerdromeImp;
