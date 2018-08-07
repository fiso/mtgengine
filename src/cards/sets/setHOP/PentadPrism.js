"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PentadPrism extends UnimplementedCard {
  constructor (game) {
    super(game, "Pentad Prism", "Planechase", "HOP");
  }
}

module.exports = PentadPrism;
