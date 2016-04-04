"use strict";
const Constants = require ("../../../Constants");
const FrenziedGoblinBase = require("../setDDN/FrenziedGoblin");

class FrenziedGoblin extends FrenziedGoblinBase {
  constructor(game) {
    super(game, "Frenzied Goblin", "Friday Night Magic", "pFNM");
  }
}

module.exports = FrenziedGoblin;
