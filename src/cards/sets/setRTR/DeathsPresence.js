"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathsPresence extends UnimplementedCard {
  constructor (game) {
    super(game, "Death's Presence", "Return to Ravnica", "RTR");
  }
}

module.exports = DeathsPresence;
