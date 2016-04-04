"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighwayRobber extends UnimplementedCard {
  constructor(game) {
    super(game, "Highway Robber", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = HighwayRobber;
