"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunTitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Sun Titan", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SunTitan;
