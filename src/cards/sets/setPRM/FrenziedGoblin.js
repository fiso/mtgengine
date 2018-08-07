"use strict";
const Constants = require ("../../../Constants");
const FrenziedGoblinBase = require("../setA25/FrenziedGoblin");

class FrenziedGoblin extends FrenziedGoblinBase {
  constructor (game) {
    super(game, "Frenzied Goblin", "Magic Online Promos", "PRM");
  }
}

module.exports = FrenziedGoblin;
