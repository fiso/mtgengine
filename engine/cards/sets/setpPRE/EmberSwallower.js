"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberSwallower extends UnimplementedCard {
  constructor(game) {
    super(game, "Ember Swallower", "Prerelease Events", "pPRE");
  }
}

module.exports = EmberSwallower;
