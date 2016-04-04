"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RhysticLightning extends Card {
  constructor(game) {
    super(game, "Rhystic Lightning", "Prophecy", "PCY");
  }
}

module.exports = RhysticLightning;
