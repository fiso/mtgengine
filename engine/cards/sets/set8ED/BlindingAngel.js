"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Blinding Angel", "Eighth Edition", "8ED");
  }
}

module.exports = BlindingAngel;
