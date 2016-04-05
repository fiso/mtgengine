"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrIncubator extends UnimplementedCard {
  constructor(game) {
    super(game, "Myr Incubator", "Mirrodin", "MRD");
  }
}

module.exports = MyrIncubator;
