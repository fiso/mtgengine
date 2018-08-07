"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Orzhova extends UnimplementedCard {
  constructor (game) {
    super(game, "Orzhova", "Planechase Anthology", "PCA");
  }
}

module.exports = Orzhova;
