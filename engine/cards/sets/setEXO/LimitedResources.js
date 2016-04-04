"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimitedResources extends UnimplementedCard {
  constructor(game) {
    super(game, "Limited Resources", "Exodus", "EXO");
  }
}

module.exports = LimitedResources;
