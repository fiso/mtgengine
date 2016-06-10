"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurstingBeebles extends UnimplementedCard {
  constructor (game) {
    super(game, "Bursting Beebles", "Unhinged", "UNH");
  }
}

module.exports = BurstingBeebles;
