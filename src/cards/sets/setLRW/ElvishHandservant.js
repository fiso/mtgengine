"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishHandservant extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Handservant", "Lorwyn", "LRW");
  }
}

module.exports = ElvishHandservant;
