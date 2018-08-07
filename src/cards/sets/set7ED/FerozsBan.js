"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FerozsBan extends UnimplementedCard {
  constructor (game) {
    super(game, "Feroz's Ban", "Seventh Edition", "7ED");
  }
}

module.exports = FerozsBan;
