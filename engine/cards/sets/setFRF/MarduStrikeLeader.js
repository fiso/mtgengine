"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduStrikeLeader extends Card {
  constructor(game) {
    super(game, "Mardu Strike Leader", "Fate Reforged", "FRF");
  }
}

module.exports = MarduStrikeLeader;
