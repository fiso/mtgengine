"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunTitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Sun Titan", "Commander 2014", "C14");
  }
}

module.exports = SunTitan;
