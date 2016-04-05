"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianLions extends UnimplementedCard {
  constructor(game) {
    super(game, "Guardian Lions", "Magic 2013", "M13");
  }
}

module.exports = GuardianLions;
