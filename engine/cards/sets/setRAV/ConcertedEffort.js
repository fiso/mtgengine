"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConcertedEffort extends UnimplementedCard {
  constructor(game) {
    super(game, "Concerted Effort", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ConcertedEffort;
