"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShamblingGoblin extends Card {
  constructor(game) {
    super(game, "Shambling Goblin", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ShamblingGoblin;
