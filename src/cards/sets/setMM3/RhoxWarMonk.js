"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhoxWarMonk extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhox War Monk", "Modern Masters 2017", "MM3");
  }
}

module.exports = RhoxWarMonk;
