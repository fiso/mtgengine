"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VictoryChimes extends UnimplementedCard {
  constructor (game) {
    super(game, "Victory Chimes", "Battlebond", "BBD");
  }
}

module.exports = VictoryChimes;
