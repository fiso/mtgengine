"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConcertedEffort extends Card {
  constructor(game) {
    super(game, "Concerted Effort", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ConcertedEffort;
