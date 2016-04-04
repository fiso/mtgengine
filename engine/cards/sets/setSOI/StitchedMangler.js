"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StitchedMangler extends Card {
  constructor(game) {
    super(game, "Stitched Mangler", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StitchedMangler;
