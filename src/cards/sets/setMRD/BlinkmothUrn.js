"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlinkmothUrn extends UnimplementedCard {
  constructor(game) {
    super(game, "Blinkmoth Urn", "Mirrodin", "MRD");
  }
}

module.exports = BlinkmothUrn;
