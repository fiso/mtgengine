"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaarIsle extends UnimplementedCard {
  constructor (game) {
    super(game, "Naar Isle", "Planechase Anthology", "PCA");
  }
}

module.exports = NaarIsle;
