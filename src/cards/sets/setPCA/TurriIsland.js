"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurriIsland extends UnimplementedCard {
  constructor (game) {
    super(game, "Turri Island", "Planechase Anthology", "PCA");
  }
}

module.exports = TurriIsland;
