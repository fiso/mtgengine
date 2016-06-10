"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oblation extends UnimplementedCard {
  constructor (game) {
    super(game, "Oblation", "Commander 2014", "C14");
  }
}

module.exports = Oblation;
