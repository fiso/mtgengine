"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Egg", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = DragonEgg;
