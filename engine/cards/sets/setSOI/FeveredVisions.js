"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeveredVisions extends Card {
  constructor(game) {
    super(game, "Fevered Visions", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FeveredVisions;
