"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExplodingBorders extends UnimplementedCard {
  constructor (game) {
    super(game, "Exploding Borders", "Conflux", "CON");
  }
}

module.exports = ExplodingBorders;
