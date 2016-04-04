"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CanopyCover extends Card {
  constructor(game) {
    super(game, "Canopy Cover", "Worldwake", "WWK");
  }
}

module.exports = CanopyCover;
