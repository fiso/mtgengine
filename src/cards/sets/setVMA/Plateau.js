"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plateau extends UnimplementedCard {
  constructor (game) {
    super(game, "Plateau", "Vintage Masters", "VMA");
  }
}

module.exports = Plateau;
