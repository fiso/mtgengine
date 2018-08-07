"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PierceStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Pierce Strider", "Battlebond", "BBD");
  }
}

module.exports = PierceStrider;
