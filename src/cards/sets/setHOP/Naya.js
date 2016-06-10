"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Naya extends UnimplementedCard {
  constructor (game) {
    super(game, "Naya", "Planechase", "HOP");
  }
}

module.exports = Naya;
