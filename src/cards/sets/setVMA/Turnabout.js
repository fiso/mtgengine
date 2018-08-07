"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Turnabout extends UnimplementedCard {
  constructor (game) {
    super(game, "Turnabout", "Vintage Masters", "VMA");
  }
}

module.exports = Turnabout;
