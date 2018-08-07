"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoilingBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Boiling Blood", "Weatherlight", "WTH");
  }
}

module.exports = BoilingBlood;
