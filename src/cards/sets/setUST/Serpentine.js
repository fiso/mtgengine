"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Serpentine extends UnimplementedCard {
  constructor (game) {
    super(game, "Serpentine", "Unstable", "UST");
  }
}

module.exports = Serpentine;
