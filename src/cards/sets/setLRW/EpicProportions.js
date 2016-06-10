"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpicProportions extends UnimplementedCard {
  constructor (game) {
    super(game, "Epic Proportions", "Lorwyn", "LRW");
  }
}

module.exports = EpicProportions;
