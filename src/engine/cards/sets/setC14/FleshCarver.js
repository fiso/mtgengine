"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleshCarver extends UnimplementedCard {
  constructor (game) {
    super(game, "Flesh Carver", "Commander 2014", "C14");
  }
}

module.exports = FleshCarver;
