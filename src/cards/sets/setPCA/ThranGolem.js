"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Thran Golem", "Planechase Anthology", "PCA");
  }
}

module.exports = ThranGolem;
