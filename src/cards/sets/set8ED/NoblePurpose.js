"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoblePurpose extends UnimplementedCard {
  constructor(game) {
    super(game, "Noble Purpose", "Eighth Edition", "8ED");
  }
}

module.exports = NoblePurpose;
