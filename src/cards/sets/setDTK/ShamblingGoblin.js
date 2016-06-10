"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Shambling Goblin", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ShamblingGoblin;
