"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraftedExoskeleton extends UnimplementedCard {
  constructor(game) {
    super(game, "Grafted Exoskeleton", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GraftedExoskeleton;
