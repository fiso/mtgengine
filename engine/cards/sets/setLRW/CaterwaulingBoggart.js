"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaterwaulingBoggart extends UnimplementedCard {
  constructor(game) {
    super(game, "Caterwauling Boggart", "Lorwyn", "LRW");
  }
}

module.exports = CaterwaulingBoggart;
