"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Egg", "Eternal Masters", "EMA");
  }
}

module.exports = DragonEgg;
