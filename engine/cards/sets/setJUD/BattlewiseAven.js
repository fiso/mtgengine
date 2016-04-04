"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattlewiseAven extends Card {
  constructor(game) {
    super(game, "Battlewise Aven", "Judgment", "JUD");
  }
}

module.exports = BattlewiseAven;
