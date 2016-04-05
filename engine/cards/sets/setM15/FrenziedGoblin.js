"use strict";
const Constants = require ("../../../Constants");
const FrenziedGoblinBase = require("../setDDN/FrenziedGoblin");

class FrenziedGoblin extends FrenziedGoblinBase {
  constructor(game) {
    super(game, "Frenzied Goblin", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FrenziedGoblin;
