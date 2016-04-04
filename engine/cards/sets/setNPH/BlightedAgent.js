"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlightedAgent extends Card {
  constructor(game) {
    super(game, "Blighted Agent", "New Phyrexia", "NPH");
  }
}

module.exports = BlightedAgent;
