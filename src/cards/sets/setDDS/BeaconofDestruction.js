"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeaconofDestruction extends UnimplementedCard {
  constructor (game) {
    super(game, "Beacon of Destruction", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = BeaconofDestruction;
