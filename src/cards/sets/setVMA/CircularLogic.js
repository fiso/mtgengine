"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CircularLogic extends UnimplementedCard {
  constructor (game) {
    super(game, "Circular Logic", "Vintage Masters", "VMA");
  }
}

module.exports = CircularLogic;
