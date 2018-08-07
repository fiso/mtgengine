"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flux extends UnimplementedCard {
  constructor (game) {
    super(game, "Flux", "Weatherlight", "WTH");
  }
}

module.exports = Flux;
