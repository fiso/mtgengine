"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PewterGolem extends Card {
  constructor(game) {
    super(game, "Pewter Golem", "Mirrodin", "MRD");
  }
}

module.exports = PewterGolem;
