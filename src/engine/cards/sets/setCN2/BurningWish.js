"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningWish extends UnimplementedCard {
  constructor (game) {
    super(game, "Burning Wish", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = BurningWish;
