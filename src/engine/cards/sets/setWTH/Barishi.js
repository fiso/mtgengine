"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Barishi extends UnimplementedCard {
  constructor (game) {
    super(game, "Barishi", "Weatherlight", "WTH");
  }
}

module.exports = Barishi;
