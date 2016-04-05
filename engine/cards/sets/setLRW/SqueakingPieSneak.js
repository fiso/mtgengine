"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SqueakingPieSneak extends UnimplementedCard {
  constructor(game) {
    super(game, "Squeaking Pie Sneak", "Lorwyn", "LRW");
  }
}

module.exports = SqueakingPieSneak;
