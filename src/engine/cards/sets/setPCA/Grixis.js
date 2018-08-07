"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Grixis extends UnimplementedCard {
  constructor (game) {
    super(game, "Grixis", "Planechase Anthology", "PCA");
  }
}

module.exports = Grixis;
