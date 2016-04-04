"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LumengridSentinel extends UnimplementedCard {
  constructor(game) {
    super(game, "Lumengrid Sentinel", "Mirrodin", "MRD");
  }
}

module.exports = LumengridSentinel;
