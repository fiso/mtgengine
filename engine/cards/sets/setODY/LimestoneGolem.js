"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LimestoneGolem extends Card {
  constructor(game) {
    super(game, "Limestone Golem", "Odyssey", "ODY");
  }
}

module.exports = LimestoneGolem;
