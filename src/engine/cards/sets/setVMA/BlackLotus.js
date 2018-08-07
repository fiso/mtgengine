"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackLotus extends UnimplementedCard {
  constructor (game) {
    super(game, "Black Lotus", "Vintage Masters", "VMA");
  }
}

module.exports = BlackLotus;
