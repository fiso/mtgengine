"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nephalia extends UnimplementedCard {
  constructor (game) {
    super(game, "Nephalia", "Planechase Anthology", "PCA");
  }
}

module.exports = Nephalia;
