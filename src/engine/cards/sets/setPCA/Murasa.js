"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Murasa extends UnimplementedCard {
  constructor (game) {
    super(game, "Murasa", "Planechase Anthology", "PCA");
  }
}

module.exports = Murasa;
