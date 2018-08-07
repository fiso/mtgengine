"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Offering", "Commander Anthology", "CMA");
  }
}

module.exports = SylvanOffering;
