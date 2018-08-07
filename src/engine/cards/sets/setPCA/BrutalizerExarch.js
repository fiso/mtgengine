"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrutalizerExarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Brutalizer Exarch", "Planechase Anthology", "PCA");
  }
}

module.exports = BrutalizerExarch;
