"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Melee extends Card {
  constructor(game) {
    super(game, "Melee", "Ice Age", "ICE");
  }
}

module.exports = Melee;
