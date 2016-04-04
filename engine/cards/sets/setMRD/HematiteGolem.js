"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HematiteGolem extends Card {
  constructor(game) {
    super(game, "Hematite Golem", "Mirrodin", "MRD");
  }
}

module.exports = HematiteGolem;
