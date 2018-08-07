"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofDusk extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of Dusk", "Tenth Edition", "10E");
  }
}

module.exports = KnightofDusk;
