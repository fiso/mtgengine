"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrandMelee extends Card {
  constructor(game) {
    super(game, "Grand Melee", "Onslaught", "ONS");
  }
}

module.exports = GrandMelee;
