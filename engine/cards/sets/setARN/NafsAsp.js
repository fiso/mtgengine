"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NafsAsp extends UnimplementedCard {
  constructor(game) {
    super(game, "Nafs Asp", "Arabian Nights", "ARN");
  }
}

module.exports = NafsAsp;
