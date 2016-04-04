"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenBloodboiler extends Card {
  constructor(game) {
    super(game, "Dwarven Bloodboiler", "Judgment", "JUD");
  }
}

module.exports = DwarvenBloodboiler;
