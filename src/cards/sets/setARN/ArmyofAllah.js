"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmyofAllah extends UnimplementedCard {
  constructor (game) {
    super(game, "Army of Allah", "Arabian Nights", "ARN");
  }
}

module.exports = ArmyofAllah;
