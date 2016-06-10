"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShrapnelBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrapnel Blast", "Friday Night Magic", "pFNM");
  }
}

module.exports = ShrapnelBlast;
