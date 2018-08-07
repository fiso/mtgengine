"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kessig extends UnimplementedCard {
  constructor (game) {
    super(game, "Kessig", "Planechase Anthology", "PCA");
  }
}

module.exports = Kessig;
