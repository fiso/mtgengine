"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleMastery extends Card {
  constructor(game) {
    super(game, "Battle Mastery", "Dragons of Tarkir", "DTK");
  }
}

module.exports = BattleMastery;
