"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fumble extends UnimplementedCard {
  constructor (game) {
    super(game, "Fumble", "Battlebond", "BBD");
  }
}

module.exports = Fumble;
