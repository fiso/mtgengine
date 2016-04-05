"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HurlyBurly extends UnimplementedCard {
  constructor(game) {
    super(game, "Hurly-Burly", "Lorwyn", "LRW");
  }
}

module.exports = HurlyBurly;
