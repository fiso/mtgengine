"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalTribute extends UnimplementedCard {
  constructor (game) {
    super(game, "Infernal Tribute", "Weatherlight", "WTH");
  }
}

module.exports = InfernalTribute;
