"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitchHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Witch Hunt", "Commander 2013", "C13");
  }
}

module.exports = WitchHunt;
