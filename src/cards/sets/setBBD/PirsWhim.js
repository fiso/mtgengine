"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PirsWhim extends UnimplementedCard {
  constructor (game) {
    super(game, "Pir's Whim", "Battlebond", "BBD");
  }
}

module.exports = PirsWhim;
