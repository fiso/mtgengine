"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LumengridAugur extends UnimplementedCard {
  constructor(game) {
    super(game, "Lumengrid Augur", "Mirrodin", "MRD");
  }
}

module.exports = LumengridAugur;
