"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostlyWings extends Card {
  constructor(game) {
    super(game, "Ghostly Wings", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GhostlyWings;
