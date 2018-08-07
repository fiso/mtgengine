"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oblation extends UnimplementedCard {
  constructor (game) {
    super(game, "Oblation", "Commander 2016", "C16");
  }
}

module.exports = Oblation;
