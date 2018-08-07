"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenPriest extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Priest", "Core Set 2019", "M19");
  }
}

module.exports = DwarvenPriest;
