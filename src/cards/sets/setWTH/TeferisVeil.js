"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisVeil extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Veil", "Weatherlight", "WTH");
  }
}

module.exports = TeferisVeil;
