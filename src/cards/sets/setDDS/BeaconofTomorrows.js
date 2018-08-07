"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeaconofTomorrows extends UnimplementedCard {
  constructor (game) {
    super(game, "Beacon of Tomorrows", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = BeaconofTomorrows;
