"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HulkingGoblin extends Card {
  constructor(game) {
    super(game, "Hulking Goblin", "Portal", "POR");
  }
}

module.exports = HulkingGoblin;
