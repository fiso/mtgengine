"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpringCleaning extends UnimplementedCard {
  constructor(game) {
    super(game, "Spring Cleaning", "Lorwyn", "LRW");
  }
}

module.exports = SpringCleaning;
