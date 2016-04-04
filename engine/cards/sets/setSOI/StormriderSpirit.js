"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormriderSpirit extends Card {
  constructor(game) {
    super(game, "Stormrider Spirit", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StormriderSpirit;
