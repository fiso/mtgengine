"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PearlDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Pearl Dragon", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PearlDragon;
