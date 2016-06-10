"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartofBogardan extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart of Bogardan", "Weatherlight", "WTH");
  }
}

module.exports = HeartofBogardan;
