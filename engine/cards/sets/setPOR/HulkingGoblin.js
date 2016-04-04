"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HulkingGoblin extends UnimplementedCard {
  constructor(game) {
    super(game, "Hulking Goblin", "Portal", "POR");
  }
}

module.exports = HulkingGoblin;
