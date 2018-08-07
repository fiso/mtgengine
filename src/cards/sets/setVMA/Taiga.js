"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Taiga extends UnimplementedCard {
  constructor (game) {
    super(game, "Taiga", "Vintage Masters", "VMA");
  }
}

module.exports = Taiga;
