"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Egg", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DragonEgg;
