"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoardersGreed extends UnimplementedCard {
  constructor(game) {
    super(game, "Hoarder's Greed", "Lorwyn", "LRW");
  }
}

module.exports = HoardersGreed;
