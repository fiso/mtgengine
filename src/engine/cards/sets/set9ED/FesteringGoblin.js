"use strict";
const Constants = require ("../../../Constants");
const FesteringGoblinBase = require("../setMMA/FesteringGoblin");

class FesteringGoblin extends FesteringGoblinBase {
  constructor (game) {
    super(game, "Festering Goblin", "Ninth Edition", "9ED");
  }
}

module.exports = FesteringGoblin;
