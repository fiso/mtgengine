"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MadAuntie extends UnimplementedCard {
  constructor(game) {
    super(game, "Mad Auntie", "Lorwyn", "LRW");
  }
}

module.exports = MadAuntie;
