"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LodestoneGolem extends Card {
  constructor(game) {
    super(game, "Lodestone Golem", "Archenemy", "ARC");
  }
}

module.exports = LodestoneGolem;
