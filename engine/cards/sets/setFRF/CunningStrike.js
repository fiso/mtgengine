"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CunningStrike extends Card {
  constructor(game) {
    super(game, "Cunning Strike", "Fate Reforged", "FRF");
  }
}

module.exports = CunningStrike;
