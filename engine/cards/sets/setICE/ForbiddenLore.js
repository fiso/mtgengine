"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForbiddenLore extends Card {
  constructor(game) {
    super(game, "Forbidden Lore", "Ice Age", "ICE");
  }
}

module.exports = ForbiddenLore;
