"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormCrow extends Card {
  constructor(game) {
    super(game, "Storm Crow", "Alliances", "ALL");
  }
}

module.exports = StormCrow;
