"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThreeDreams extends UnimplementedCard {
  constructor (game) {
    super(game, "Three Dreams", "Planechase Anthology", "PCA");
  }
}

module.exports = ThreeDreams;
