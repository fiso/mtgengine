"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SacredArmory extends Card {
  constructor(game) {
    super(game, "Sacred Armory", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SacredArmory;
