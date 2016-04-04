"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CobaltGolem extends Card {
  constructor(game) {
    super(game, "Cobalt Golem", "Mirrodin", "MRD");
  }
}

module.exports = CobaltGolem;
