"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlayerHusk extends UnimplementedCard {
  constructor (game) {
    super(game, "Flayer Husk", "Planechase Anthology", "PCA");
  }
}

module.exports = FlayerHusk;
