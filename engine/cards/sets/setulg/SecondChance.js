"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecondChance extends Card {
  constructor(game) {
    super(game, "Second Chance", "Urza's Legacy", "ULG");
  }
}

module.exports = SecondChance;
