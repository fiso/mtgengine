"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FurnaceBrood extends Card {
  constructor(game) {
    super(game, "Furnace Brood", "Exodus", "EXO");
  }
}

module.exports = FurnaceBrood;
