"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Genesis extends UnimplementedCard {
  constructor (game) {
    super(game, "Genesis", "Vintage Masters", "VMA");
  }
}

module.exports = Genesis;
