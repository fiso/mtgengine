"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LodestoneGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Lodestone Golem", "Archenemy", "ARC");
  }
}

module.exports = LodestoneGolem;
