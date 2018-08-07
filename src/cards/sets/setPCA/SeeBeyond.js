"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeeBeyond extends UnimplementedCard {
  constructor (game) {
    super(game, "See Beyond", "Planechase Anthology", "PCA");
  }
}

module.exports = SeeBeyond;
