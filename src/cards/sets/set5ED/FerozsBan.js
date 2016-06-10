"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FerozsBan extends UnimplementedCard {
  constructor (game) {
    super(game, "Feroz's Ban", "Fifth Edition", "5ED");
  }
}

module.exports = FerozsBan;
