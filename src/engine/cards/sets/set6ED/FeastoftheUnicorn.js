"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeastoftheUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Feast of the Unicorn", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FeastoftheUnicorn;
