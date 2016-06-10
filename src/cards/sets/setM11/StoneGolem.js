"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Golem", "Magic 2011", "M11");
  }
}

module.exports = StoneGolem;
