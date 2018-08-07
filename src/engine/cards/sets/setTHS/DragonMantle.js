"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Mantle", "Theros", "THS");
  }
}

module.exports = DragonMantle;
