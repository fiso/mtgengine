"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClipWings extends Card {
  constructor(game) {
    super(game, "Clip Wings", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ClipWings;
