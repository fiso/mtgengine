"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntingMisery extends UnimplementedCard {
  constructor(game) {
    super(game, "Haunting Misery", "Weatherlight", "WTH");
  }
}

module.exports = HauntingMisery;
