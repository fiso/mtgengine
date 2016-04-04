"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JourneyersKite extends Card {
  constructor(game) {
    super(game, "Journeyer's Kite", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JourneyersKite;
