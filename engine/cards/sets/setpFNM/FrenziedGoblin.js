"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrenziedGoblinBase = require("../setDDN/FrenziedGoblin.js");

class FrenziedGoblin extends FrenziedGoblinBase {
  constructor(game) {
    super(game, "Frenzied Goblin", "Friday Night Magic", "pFNM");
  }
}

module.exports = FrenziedGoblin;
