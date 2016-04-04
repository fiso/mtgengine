"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PicktheBrain extends Card {
  constructor(game) {
    super(game, "Pick the Brain", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PicktheBrain;
