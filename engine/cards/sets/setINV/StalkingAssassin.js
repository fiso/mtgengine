"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StalkingAssassin extends Card {
  constructor(game) {
    super(game, "Stalking Assassin", "Invasion", "INV");
  }
}

module.exports = StalkingAssassin;
