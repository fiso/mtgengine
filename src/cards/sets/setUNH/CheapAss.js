"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CheapAss extends UnimplementedCard {
  constructor(game) {
    super(game, "Cheap Ass", "Unhinged", "UNH");
  }
}

module.exports = CheapAss;
