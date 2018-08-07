"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LodestoneMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Lodestone Myr", "Modern Masters 2015", "MM2");
  }
}

module.exports = LodestoneMyr;
