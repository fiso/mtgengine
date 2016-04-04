"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarpedLandscape extends Card {
  constructor(game) {
    super(game, "Warped Landscape", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WarpedLandscape;
