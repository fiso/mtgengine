"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Facevaulter extends UnimplementedCard {
  constructor (game) {
    super(game, "Facevaulter", "Lorwyn", "LRW");
  }
}

module.exports = Facevaulter;
