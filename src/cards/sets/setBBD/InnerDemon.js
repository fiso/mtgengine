"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnerDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Inner Demon", "Battlebond", "BBD");
  }
}

module.exports = InnerDemon;
