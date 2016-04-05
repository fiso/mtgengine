"use strict";
const Constants = require ("../../../Constants");
const FesteringGoblinBase = require("../setARC/FesteringGoblin");

class FesteringGoblin extends FesteringGoblinBase {
  constructor(game) {
    super(game, "Festering Goblin", "Planechase", "HOP");
  }
}

module.exports = FesteringGoblin;
