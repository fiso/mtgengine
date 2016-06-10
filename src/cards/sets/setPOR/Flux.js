"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flux extends UnimplementedCard {
  constructor (game) {
    super(game, "Flux", "Portal", "POR");
  }
}

module.exports = Flux;
