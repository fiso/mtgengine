"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CollapsingBorders extends Card {
  constructor(game) {
    super(game, "Collapsing Borders", "Invasion", "INV");
  }
}

module.exports = CollapsingBorders;
