"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhoxWarMonk extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhox War Monk", "Friday Night Magic", "pFNM");
  }
}

module.exports = RhoxWarMonk;
