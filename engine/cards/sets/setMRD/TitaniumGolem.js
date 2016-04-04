"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TitaniumGolem extends Card {
  constructor(game) {
    super(game, "Titanium Golem", "Mirrodin", "MRD");
  }
}

module.exports = TitaniumGolem;
