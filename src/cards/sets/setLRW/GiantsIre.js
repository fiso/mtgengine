"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantsIre extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant's Ire", "Lorwyn", "LRW");
  }
}

module.exports = GiantsIre;
