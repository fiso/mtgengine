"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduStrikeLeader extends UnimplementedCard {
  constructor (game) {
    super(game, "Mardu Strike Leader", "Fate Reforged", "FRF");
  }
}

module.exports = MarduStrikeLeader;
