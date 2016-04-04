"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MalachiteGolem extends Card {
  constructor(game) {
    super(game, "Malachite Golem", "Mirrodin", "MRD");
  }
}

module.exports = MalachiteGolem;
