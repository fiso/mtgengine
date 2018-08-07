"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExclusionMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Exclusion Mage", "Core Set 2019", "M19");
  }
}

module.exports = ExclusionMage;
