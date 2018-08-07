"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormfrontRiders extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormfront Riders", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = StormfrontRiders;
