"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildRicochet extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Ricochet", "Commander 2013", "C13");
  }
}

module.exports = WildRicochet;
