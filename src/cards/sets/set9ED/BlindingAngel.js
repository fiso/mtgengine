"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinding Angel", "Ninth Edition", "9ED");
  }
}

module.exports = BlindingAngel;
