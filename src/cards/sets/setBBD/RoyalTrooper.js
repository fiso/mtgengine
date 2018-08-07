"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoyalTrooper extends UnimplementedCard {
  constructor (game) {
    super(game, "Royal Trooper", "Battlebond", "BBD");
  }
}

module.exports = RoyalTrooper;
