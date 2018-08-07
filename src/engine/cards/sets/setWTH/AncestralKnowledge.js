"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestralKnowledge extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancestral Knowledge", "Weatherlight", "WTH");
  }
}

module.exports = AncestralKnowledge;
