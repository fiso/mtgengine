"use strict";
const Constants = require ("../../../Constants");
const HulkingGoblinBase = require("../setPOR/HulkingGoblin");

class HulkingGoblin extends HulkingGoblinBase {
  constructor (game) {
    super(game, "Hulking Goblin", "Vintage Masters", "VMA");
  }
}

module.exports = HulkingGoblin;
