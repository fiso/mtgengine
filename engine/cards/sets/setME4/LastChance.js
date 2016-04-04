"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LastChance extends Card {
  constructor(game) {
    super(game, "Last Chance", "Masters Edition IV", "ME4");
  }
}

module.exports = LastChance;
