"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LodestoneGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Lodestone Golem", "Modern Masters 2015", "MM2");
  }
}

module.exports = LodestoneGolem;
