"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlenElendra extends UnimplementedCard {
  constructor (game) {
    super(game, "Glen Elendra", "Planechase Anthology", "PCA");
  }
}

module.exports = GlenElendra;
