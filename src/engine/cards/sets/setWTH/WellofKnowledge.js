"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WellofKnowledge extends UnimplementedCard {
  constructor (game) {
    super(game, "Well of Knowledge", "Weatherlight", "WTH");
  }
}

module.exports = WellofKnowledge;
