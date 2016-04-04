"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurntheImpure extends Card {
  constructor(game) {
    super(game, "Burn the Impure", "Mirrodin Besieged", "MBS");
  }
}

module.exports = BurntheImpure;
