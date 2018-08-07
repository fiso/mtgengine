"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LairwatchGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Lairwatch Giant", "Lorwyn", "LRW");
  }
}

module.exports = LairwatchGiant;
