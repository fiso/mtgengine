"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrambleSovereign extends UnimplementedCard {
  constructor (game) {
    super(game, "Bramble Sovereign", "Battlebond", "BBD");
  }
}

module.exports = BrambleSovereign;
