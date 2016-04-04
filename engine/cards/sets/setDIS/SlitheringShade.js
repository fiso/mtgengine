"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlitheringShade extends Card {
  constructor(game) {
    super(game, "Slithering Shade", "Dissension", "DIS");
  }
}

module.exports = SlitheringShade;
