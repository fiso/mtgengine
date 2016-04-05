"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollapsingBorders extends UnimplementedCard {
  constructor(game) {
    super(game, "Collapsing Borders", "Invasion", "INV");
  }
}

module.exports = CollapsingBorders;
