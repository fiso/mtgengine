"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Shambling Goblin", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ShamblingGoblin;
