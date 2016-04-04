"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonsClaw extends Card {
  constructor(game) {
    super(game, "Dragon's Claw", "Darksteel", "DST");
  }
}

module.exports = DragonsClaw;
