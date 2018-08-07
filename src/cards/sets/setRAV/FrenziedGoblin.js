"use strict";
const Constants = require ("../../../Constants");
const FrenziedGoblinBase = require("../setA25/FrenziedGoblin");

class FrenziedGoblin extends FrenziedGoblinBase {
  constructor (game) {
    super(game, "Frenzied Goblin", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FrenziedGoblin;
