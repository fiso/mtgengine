"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Goldmeadow extends UnimplementedCard {
  constructor (game) {
    super(game, "Goldmeadow", "Planechase", "HOP");
  }
}

module.exports = Goldmeadow;
