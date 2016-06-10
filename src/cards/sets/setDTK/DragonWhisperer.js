"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonWhisperer extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Whisperer", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonWhisperer;
