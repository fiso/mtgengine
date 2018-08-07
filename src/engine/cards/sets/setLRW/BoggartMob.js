"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoggartMob extends UnimplementedCard {
  constructor (game) {
    super(game, "Boggart Mob", "Lorwyn", "LRW");
  }
}

module.exports = BoggartMob;
