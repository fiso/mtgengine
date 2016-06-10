"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatteringCraghorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Battering Craghorn", "Archenemy", "ARC");
  }
}

module.exports = BatteringCraghorn;
