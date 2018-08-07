"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Naya extends UnimplementedCard {
  constructor (game) {
    super(game, "Naya", "Planechase Anthology", "PCA");
  }
}

module.exports = Naya;
