"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrutalizerExarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Brutalizer Exarch", "New Phyrexia", "NPH");
  }
}

module.exports = BrutalizerExarch;
