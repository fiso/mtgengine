"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RogueKavu extends Card {
  constructor(game) {
    super(game, "Rogue Kavu", "Invasion", "INV");
  }
}

module.exports = RogueKavu;
