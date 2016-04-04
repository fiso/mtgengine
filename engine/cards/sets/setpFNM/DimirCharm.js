"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Dimir Charm", "Friday Night Magic", "pFNM");
  }
}

module.exports = DimirCharm;
