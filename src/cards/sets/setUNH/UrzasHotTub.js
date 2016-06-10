"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasHotTub extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Hot Tub", "Unhinged", "UNH");
  }
}

module.exports = UrzasHotTub;
