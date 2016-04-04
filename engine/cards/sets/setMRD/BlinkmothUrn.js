"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlinkmothUrn extends Card {
  constructor(game) {
    super(game, "Blinkmoth Urn", "Mirrodin", "MRD");
  }
}

module.exports = BlinkmothUrn;
