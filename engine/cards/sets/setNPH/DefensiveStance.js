"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefensiveStance extends Card {
  constructor(game) {
    super(game, "Defensive Stance", "New Phyrexia", "NPH");
  }
}

module.exports = DefensiveStance;
