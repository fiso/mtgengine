"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrambleElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Bramble Elemental", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BrambleElemental;
