"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RelicBane extends Card {
  constructor(game) {
    super(game, "Relic Bane", "Mirrodin", "MRD");
  }
}

module.exports = RelicBane;
