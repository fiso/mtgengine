"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianLens extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Lens", "Invasion", "INV");
  }
}

module.exports = PhyrexianLens;
