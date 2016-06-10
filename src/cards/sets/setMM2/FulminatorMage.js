"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FulminatorMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Fulminator Mage", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = FulminatorMage;
