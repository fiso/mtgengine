"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MastersCall extends Card {
  constructor(game) {
    super(game, "Master's Call", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MastersCall;
