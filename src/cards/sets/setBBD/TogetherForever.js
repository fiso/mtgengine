"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TogetherForever extends UnimplementedCard {
  constructor (game) {
    super(game, "Together Forever", "Battlebond", "BBD");
  }
}

module.exports = TogetherForever;
