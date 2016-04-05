"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeastoftheUnicorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Feast of the Unicorn", "Anthologies", "ATH");
  }
}

module.exports = FeastoftheUnicorn;
