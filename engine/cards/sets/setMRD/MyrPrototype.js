"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrPrototype extends Card {
  constructor(game) {
    super(game, "Myr Prototype", "Mirrodin", "MRD");
  }
}

module.exports = MyrPrototype;
