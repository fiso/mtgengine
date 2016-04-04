"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimestoneGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Limestone Golem", "Odyssey", "ODY");
  }
}

module.exports = LimestoneGolem;
