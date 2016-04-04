"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighwayRobber extends Card {
  constructor(game) {
    super(game, "Highway Robber", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = HighwayRobber;
