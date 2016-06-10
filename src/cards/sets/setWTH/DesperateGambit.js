"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesperateGambit extends UnimplementedCard {
  constructor (game) {
    super(game, "Desperate Gambit", "Weatherlight", "WTH");
  }
}

module.exports = DesperateGambit;
