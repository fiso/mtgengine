"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientCraving extends Card {
  constructor(game) {
    super(game, "Ancient Craving", "Commander 2015", "C15");
  }
}

module.exports = AncientCraving;
