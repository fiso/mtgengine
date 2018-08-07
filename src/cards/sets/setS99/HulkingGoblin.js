"use strict";
const Constants = require ("../../../Constants");
const HulkingGoblinBase = require("../setVMA/HulkingGoblin");

class HulkingGoblin extends HulkingGoblinBase {
  constructor (game) {
    super(game, "Hulking Goblin", "Starter 1999", "S99");
  }
}

module.exports = HulkingGoblin;
