"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedIsle extends UnimplementedCard {
  constructor (game) {
    super(game, "Tainted Isle", "Planechase Anthology", "PCA");
  }
}

module.exports = TaintedIsle;
