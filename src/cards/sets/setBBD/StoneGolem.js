"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Golem", "Battlebond", "BBD");
  }
}

module.exports = StoneGolem;
