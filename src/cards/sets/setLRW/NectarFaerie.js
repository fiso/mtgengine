"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NectarFaerie extends UnimplementedCard {
  constructor (game) {
    super(game, "Nectar Faerie", "Lorwyn", "LRW");
  }
}

module.exports = NectarFaerie;
