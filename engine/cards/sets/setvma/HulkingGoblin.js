"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HulkingGoblinBase = require("../setPOR/HulkingGoblin.js");

class HulkingGoblin extends HulkingGoblinBase {
  constructor(game) {
    super(game, "Hulking Goblin", "Vintage Masters", "VMA");
  }
}

module.exports = HulkingGoblin;
