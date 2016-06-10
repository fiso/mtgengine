"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Steadfastness extends UnimplementedCard {
  constructor (game) {
    super(game, "Steadfastness", "Portal", "POR");
  }
}

module.exports = Steadfastness;
